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
    let instrument = new chordictionary.Instrument(
      chordictionary.tuning.guitar.standard.join(""),
      24,
      5,
      4
    )
    let filteredChords = []
    let chordFind = instrument.getChordsList(props.chord)
    console.log("CHORD_FILTERED:", chordFind)

    chordFind.chordList.forEach(chord => {
      let chordInfo = instrument.getChordInfo(chord.tab.join(""))
      let is = this.fitsOnParameters(chord, props)
      // try {
      //   console.log(
      //     "CHORD_FILTERED_MIDDLE:",
      //     chord,
      //     is,
      //     chordInfo.chords[0].name,
      //     props.chord
      //   )
      // } catch (e) {
      //   console.log("CHORD_FILTERED_MIDDLE_ERROR:", e)
      // }

      try {
        if (is) {
          // if (chordInfo.chords[0].name.indexOf(props.chord) !== -1 && is) {
          // console.log("CHORD_FILTERED_BEFORE_PUSH:")
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
        console.log("ERROR", e)
      }
    })
    // console.log("filteredChords", filteredChords)
    this.setState({ chords: filteredChords })
  }
  componentWillReceiveProps(newProps) {
    this.filteredChords(newProps)
  }

  render() {
    // console.log("FIRED_FILTERED:", this.props, Date.now())
    return (
      <div className="chordsBox">
        <div className="filteredChords">
          <span className="enharmonic">
            * Some of this chords may have different name than the selected one
            but the same exact notes. This is what is called
            <a href="https://en.wikipedia.org/wiki/Enharmonic">
              {" "}
              Enharmonic chords
            </a>
            .
          </span>
          {this.state.chords}
        </div>
      </div>
    )
  }
}
export default FilterbyFret
