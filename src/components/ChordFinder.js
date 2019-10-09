import React from "react"
import "../css/chordictionary.min.css"

import * as chordictionary from "chordictionary"
import "../css/chordFinder.css"
// import * as Chord from "tonal-chord"
import * as Scale from "tonal-scale"
import * as Dictionary from "tonal-dictionary"
class ChordsFinder extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentWillReceiveProps(props) {
    let guitar = new chordictionary.Instrument("EADGBE", 24, 5, 4)

    //Get all chords that fits a given scale
    let fitChordsFromScales = Scale.chords("pentatonic") // => ["5", "64", "M", "M6", "Madd9", "Msus2"]
    // Related Scales from a give chord
    let relatedScales = Scale.supersets("major")

    let chordFind = guitar.getChordsList(props.chord)
    console.log("FOUND_CHORDS:", chordFind)
    let foundBasicChords = []
    chordFind.chordList.forEach(chord => {
      if (chord.tag[0] === "basic") {
        foundBasicChords.push(chord)
      } else {
        if (chord.tag[0] === "bar") {
          foundBasicChords.push(chord)
        } else {
          let counter = 0
          let muted = 0
          chord.tab.forEach(element => {
            if (element <= 3) {
              counter += 1
            }
            if (element === "x") {
              muted += 1
            }
          })

          if (counter > 2 && !muted) {
            foundBasicChords.push(chord)
            console.error("BRAAAAVOOOO")
          }
        }
      }
    })
    console.error("BASIC:", foundBasicChords)
    let chordInfo = guitar.getChordInfo(foundBasicChords[0].tab.join(""))

    let chordLayout = guitar.getChordLayout(foundBasicChords[0].tab.join(""), {
      name: chordInfo.chords[0].name,
      notes: chordInfo.chords[0].intervals,
    })
    this.setState({ data: chordLayout })
    console.log("CHORD LAYOUT:", chordLayout)
    console.log("CHORD INFO:", chordInfo)
  }
  componentWillMount() {
    let guitar = new chordictionary.Instrument("EADGBE", 24, 5, 4)
    let chordFind = guitar.getChordsList(this.props.chord)
    console.log("FOUND_CHORDS:", chordFind)
    let foundBasicChords = []
    chordFind.chordList.forEach(chord => {
      if (chord.tag[0] === "basic") {
        foundBasicChords.push(chord)
      } else {
        if (chord.tag[0] === "bar") {
          foundBasicChords.push(chord)
        } else {
          let counter = 0
          let muted = 0
          chord.tab.forEach(element => {
            if (element <= 3) {
              counter += 1
            }
            if (element === "x") {
              muted += 1
            }
          })

          if (counter > 2 && !muted) {
            foundBasicChords.push(chord)
          }
        }
      }
    })

    console.log("BASIC:", foundBasicChords)
    let chordInfo = guitar.getChordInfo(foundBasicChords[0].tab.join(""))
    console.log("CHORD INFO:", chordInfo.chords)

    let chordLayout = guitar.getChordLayout(foundBasicChords[0].tab.join(""), {
      name: chordInfo.chords[0].name,
      notes: chordInfo.chords[0].intervals,
    })

    this.setState({ data: chordLayout })
    console.log("CHORD LAYOUT:", chordLayout)
  }

  render() {
    // console.log("CHORD:", Dictionary.chord("Maj7"))

    return (
      <React.Fragment>
        <div
          className="chordBox"
          dangerouslySetInnerHTML={{ __html: this.state.data }}
        />
      </React.Fragment>
    )
  }
}

export default ChordsFinder
