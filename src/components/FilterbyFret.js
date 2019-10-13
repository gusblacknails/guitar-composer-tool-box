import React from "react"
import "../css/chordictionary.min.css"
import "../css/chordFinder.css"
import * as chordictionary from "chordictionary"

class FilterbyFret extends React.Component {
  constructor() {
    super()
    this.state = {
      chords: [],
    }
  }
  filteredChords(props) {
    let instrument = new chordictionary.Instrument("EADGBE", 24, 5, 4)
    let filteredChords = []
    let chordFind = instrument.getChordsList(props.chord)
    const fitsOnParameters = (chord, props) => {
      let counter = 0

      chord.tab.forEach(element => {
        if (element === "x") {
          counter += 1
        }

        if (
          element >= props.currentMinFret &&
          element <= props.currentMaxFret
        ) {
          counter += 1
        }
      })
      if (counter === chord.tab.length) {
        return true
      } else {
        return false
      }
    }
    chordFind.chordList.forEach(chord => {
      let chordInfo = instrument.getChordInfo(chord.tab.join(""))

      try {
        let is = fitsOnParameters(chord, this.props)

        if (chordInfo.chords[0].name.indexOf(props.chord) !== -1 && is) {
          filteredChords.push(
            <div
              className="chordFiltered"
              dangerouslySetInnerHTML={{
                __html: instrument.getChordLayout(chord.tab.join(""), {
                  name: chordInfo.chords[0].name,
                  notes: chordInfo.chords[0].intervals,
                }),
              }}
            ></div>
          )
        }
      } catch (err) {}
    })

    this.setState({ chords: filteredChords })
  }
  componentWillReceiveProps(props) {
    this.filteredChords(props)
  }
  componentWillMount() {
    this.filteredChords(this.props)
  }

  render() {
    return (
      <div className="chordsBox">
        {this.state.chords.length > 0 && (
          <div className="filteredChords">
            <div />
            {this.state.chords}
          </div>
        )}
      </div>
    )
  }
}
export default FilterbyFret
