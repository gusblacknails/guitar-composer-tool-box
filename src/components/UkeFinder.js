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
  chordFilter(fixedMajChord, props) {
    let ukelele = new chordictionary.Instrument(
      chordictionary.tuning.ukulele.standard.join(""),
      24,
      5,
      4
    )
    let filteredChords = []
    let chordFind = ukelele.getChordsList(fixedMajChord)
    chordFind.chordList.forEach(chord => {
      let chordInfo = ukelele.getChordInfo(chord.tab.join(""))
      let is = this.fitsOnParameters(chord, props)
      try {
        if (is) {
          // if (chordInfo.chords[0].name.indexOf(fixedMajChord) !== -1 && is) {
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
  majorUkeChordFix(data) {
    let lastThree
    try {
      lastThree = data.substr(data.length - 3)
    } catch (e) {
      console.log(e)
    }
    console.log("lastThree:", lastThree)
    if (lastThree === "Maj") {
      let newStr = data.substring(0, data.length - 3)
      return newStr
    } else {
      return data
    }
  }
  componentWillReceiveProps(newProps) {
    let fixedMajChord = this.majorUkeChordFix(newProps.chord)
    this.chordFilter(fixedMajChord, newProps)
  }
  render() {
    return (
      <div className="chordsBox">
        <div className="filteredChords">
          <span className="enharmonic">
            * Some of this chords may have a different name that the selected
            one but the same exact notes. This is what is called
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
export default UkeChordsFinder
