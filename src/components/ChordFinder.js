import React from "react"
import "../css/chordictionary.min.css"
import * as chordictionary from "chordictionary"
import "../css/chordFinder.css"
import * as Scale from "tonal-scale"
import * as Dictionary from "tonal-dictionary"
class ChordsFinder extends React.Component {
  constructor() {
    super()
    this.state = {
      basic: [],
      barre: [],
    }
  }
  ceroToThirdFretFilter(props) {
    let instrument = new chordictionary.Instrument("EADGBE", 24, 5, 4)

    //Get all chords that fits a given scale
    let fitChordsFromScales = Scale.chords("pentatonic") // => ["5", "64", "M", "M6", "Madd9", "Msus2"]
    // Related Scales from a give chord
    let relatedScales = Scale.supersets("major")

    let chordFind = instrument.getChordsList(props.chord)
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

    let basicChords = []
    let barChords = []

    foundBasicChords.forEach(chord => {
      if (chord.tag == "basic") {
        let chordInfo = instrument.getChordInfo(chord.tab.join(""))
        basicChords.push(
          instrument.getChordLayout(chord.tab.join(""), {
            name: chordInfo.chords[0].name,
            notes: chordInfo.chords[0].intervals,
          })
        )
      }
      if (chord.tag == "bar") {
        let chordInfo = instrument.getChordInfo(chord.tab.join(""))
        barChords.push(
          instrument.getChordLayout(chord.tab.join(""), {
            name: chordInfo.chords[0].name,
            notes: chordInfo.chords[0].intervals,
          })
        )
      }
    })

    this.setState({ basic: basicChords, barre: barChords })
  }
  componentWillReceiveProps(props) {
    this.ceroToThirdFretFilter(props)
  }
  componentWillMount() {
    this.ceroToThirdFretFilter(this.props)
  }

  render() {
    console.log("LENGHT:", this.state.basic.length)
    return (
      <div className="chordsBox">
        {this.state.basic.length > 0 && (
          <div>
            <h2 class="titles">Basic Chords</h2>
            <div
              className="chordBasic"
              dangerouslySetInnerHTML={{ __html: this.state.basic }}
            />
          </div>
        )}
        {this.state.barre.length > 0 && (
          <div>
            <h2 className="titles">Barre Chords</h2>
            <div
              className="chordBasic"
              dangerouslySetInnerHTML={{ __html: this.state.barre }}
            />
          </div>
        )}
      </div>
    )
  }
}

export default ChordsFinder
