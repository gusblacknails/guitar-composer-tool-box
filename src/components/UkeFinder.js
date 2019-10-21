import React from "react"
import "../css/chordictionary.min.css"
import * as chordictionary from "chordictionary"
import "../css/chordFinder.css"

class UkeChordsFinder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chords: [],
    }
  }
  fitsOnParameters = (chord, props) => {
    let counter = 0

    chord.tab.forEach(element => {
      if (element === "x") {
        counter += 1
      }

      if (element >= props.currentMinFret && element <= props.currentMaxFret) {
        counter += 1
      }
    })
    if (counter === chord.tab.length) {
      return true
    } else {
      return false
    }
  }
  chordFilter(props) {
    let ukelele = new chordictionary.Instrument(
      chordictionary.tuning.ukulele.standard.join(""),
      24,
      5,
      4
    )
    let filteredChords = []
    let chordFind = ukelele.getChordsList(props.chord)
    chordFind.chordList.forEach(chord => {
      let chordInfo = ukelele.getChordInfo(chord.tab.join(""))
      let is = this.fitsOnParameters(chord, props)
      try {
        if (chordInfo.chords[0].name.indexOf(props.chord) !== -1 && is) {
          filteredChords.push(
            <div
              className="chordFiltered"
              dangerouslySetInnerHTML={{
                __html: ukelele.getChordLayout(chord.tab.join(""), {
                  name: chordInfo.chords[0].name,
                  notes: chordInfo.chords[0].intervals,
                }),
              }}
            ></div>
          )
        }
      } catch (e) {
        console.log("ERROR", e)
      }
    })
    this.setState({ chords: filteredChords })
  }
  componentWillReceiveProps(newProps) {
    this.chordFilter(newProps)
  }
  render() {
    console.log("UKECHORDS:", this.state.chords)
    return (
      <div className="chordsBox">
        <div className="filteredChords">{this.state.chords}</div>
      </div>
    )
  }
}
export default UkeChordsFinder
