import React from "react"
import "../css/chordictionary.min.css"
import "../css/chordFinder.css"
import * as chordictionary from "chordictionary"

class FilterbyFret extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chords: [],
    }
  }
  fitsOnParameters = (chord, props) => {
    let counter = 0
    // console.log("inside_fitsOnParameters", chord, props)

    chord.tab.forEach(element => {
      if (element === "x") {
        counter += 1
      }

      if (element >= props.currentMinFret && element <= props.currentMaxFret) {
        counter += 1
      }
    })
    if (counter === chord.tab.length) {
      // console.log("end_fitsOnParameters", true)
      return true
    } else {
      // console.log("end_fitsOnParameters", false)
      return false
    }
  }
  filteredChords(props) {
    // console.log("INSIDE filteredChords:")
    let instrument = new chordictionary.Instrument("EADGBE", 24, 5, 4)
    let filteredChords = []
    let chordFind = instrument.getChordsList(props.chord)
    // console.log("CHORD_FILTERED:", chordFind)

    chordFind.chordList.forEach(chord => {
      let chordInfo = instrument.getChordInfo(chord.tab.join(""))
      let is = this.fitsOnParameters(chord, props)

      // console.log(
      //   "CHORD_FILTERED_MIDDLE:",
      //   chord,
      //   is,
      //   chordInfo.chords[0].name
      // )
      try {
        if (chordInfo.chords[0].name.indexOf(props.chord) !== -1 && is) {
          console.log("AFTER_IF:")

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
      } catch (e) {
        // console.log("ERROR", e)
      }
    })
    console.log("filteredChords", filteredChords)
    this.setState({ chords: filteredChords })
  }
  componentWillReceiveProps(newProps) {
    // console.log("componentWillReceiveProps_filtered:", newProps, Date.now())
    this.filteredChords(newProps)
  }
  // componentWillMount() {
  //   console.log("componentWillMount_filtered:", this.props)
  //   this.filteredChords(this.props)
  // }

  render() {
    // console.log("FIRED_FILTERED:", this.props, Date.now())
    return (
      <div className="chordsBox">
        <div className="filteredChords">{this.state.chords}</div>
      </div>
    )
  }
}
export default FilterbyFret
