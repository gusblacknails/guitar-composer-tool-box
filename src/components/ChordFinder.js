import React from "react"
import "../css/chordictionary.min.css"
import * as chordictionary from "chordictionary"
import "../css/chordFinder.css"

import { chord } from "tonal-dictionary"
import * as Scale from "tonal-scale"
import * as Chord from "tonal-chord"
import * as PcSet from "tonal-pcset"
class ChordsFinder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      basic: [],
      barre: [],
    }
  }
  ceroToThirdFretFilter(props) {
    let instrument = new chordictionary.Instrument("EADGBE", 24, 5, 4)

    //Get all chords that fits a given scale
    Scale.chords("pentatonic") // => ["5", "64", "M", "M6", "Madd9", "Msus2"]

    console.log("TOKEN:", Chord.tokenize(props.chord))
    let fitChordsFromScales = Scale.supersets("pentatonic")
    console.log("chord:", chord(props.chord), Chord.notes(props.chord))

    console.log("chroma:", PcSet.chroma(["C", "D", "E"]))
    // Related Scales from a give chord
    // let relatedScales = Scale.modeNames("pentatonic")
    let chordFind
    try {
      chordFind = instrument.getChordsList(props.chord)
      console.log("CHORD:", chordFind)
    } catch (e) {
      console.log("ERROR:", e)
    }

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
    console.log("MIDDLE_OUT:", foundBasicChords)
    foundBasicChords.forEach(chord => {
      if (chord.tag == "basic") {
        let chordInfo = instrument.getChordInfo(chord.tab.join(""))
        basicChords.push(
          <div
            className="chordBasic"
            dangerouslySetInnerHTML={{
              __html: instrument.getChordLayout(chord.tab.join(""), {
                name: chordInfo.chords[0].name,
                notes: chordInfo.chords[0].intervals,
              }),
            }}
          ></div>
        )
      }

      if (chord.tag == "bar") {
        let chordInfo = instrument.getChordInfo(chord.tab.join(""))
        barChords.push(
          <div
            className="chordBasic"
            dangerouslySetInnerHTML={{
              __html: instrument.getChordLayout(chord.tab.join(""), {
                name: chordInfo.chords[0].name,
                notes: chordInfo.chords[0].intervals,
              }),
            }}
          ></div>
        )
      }
    })

    this.setState({ basic: basicChords, barre: barChords })
    console.log("OUT:", this.state)
  }
  componentWillReceiveProps(newProps) {
    this.ceroToThirdFretFilter(newProps)
  }
  // componentWillMount() {
  //   this.ceroToThirdFretFilter(this.props)
  // }
  chordToggleClass() {
    let useClass =
      this.state.barre.length > 0 ? "chordChildBox" : "chordChildBoxSingle"
    return useClass
  }
  chordToggleClassBarre() {
    let useClass =
      this.state.basic.length > 0 ? "chordChildBox" : "chordChildBoxSingle"
    return useClass
  }
  render() {
    console.log("FIRED_BASIC:", this.props)
    // console.log("modes:", PcSet.isEqual("c2 d5 e6", "c6 e3 d1"))
    // console.log("isChroma : ", PcSet.isChroma("101010101010"))
    // console.log("scale:", Scale("c5 pentatonic"))
    return (
      <div className="chordsBox">
        {this.state.basic.length > 0 && (
          <div class={this.chordToggleClass()}>
            <h2 class="titles">Basic Chords</h2>
            <div className="chordFlex">{this.state.basic}</div>
          </div>
        )}
        {this.state.barre.length > 0 && (
          <div class={this.chordToggleClassBarre()}>
            <h2 className="titles">Barre Chords</h2>
            <div className="chordFlex">{this.state.barre}</div>
          </div>
        )}
      </div>
    )
  }
}

export default ChordsFinder
