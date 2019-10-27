import React from "react"
import "../css/chordictionary.min.css"
import * as chordictionary from "chordictionary"
import "../css/chordFinder.css"

// import { chord } from "tonal-dictionary"
import * as Scale from "tonal-scale"
// import * as Chord from "tonal-chord"
import * as PcSet from "tonal-pcset"
import Chord from "@tombatossals/react-chords/lib/Chord"
import "../css/harmonizerChordStyles.css"
import * as teoria from "teoria"
import * as teoriaChordProgression from "teoria-chord-progression"
// const teoria = require("teoria"),
// teoriaChordProgression = require("teoria-chord-progression")
const guitar = require(`@tombatossals/chords-db/lib/guitar.json`)

class Harmonizer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      root: "C",
      scale: "Maj",
      normalChords: "",
      seventhChords: "",
    }
  }
  //Get all chords that fits a given scale
  // Scale.chords("pentatonic") // => ["5", "64", "M", "M6", "Madd9", "Msus2"]

  // console.log("TOKEN:", Chord.tokenize(props.chord))
  // let fitChordsFromScales = Scale.supersets("pentatonic")
  // console.log("chord:", chord(props.chord), Chord.notes(props.chord))

  // console.log("chroma:", PcSet.chroma(["C", "D", "E"]))
  // DONT USE SCALES: chromatic, doubleharmonic, harmonicchromatic
  extractRoot(name) {
    let out = name.charAt(0)
    if (name.charAt(1) === "#") {
      out = out + "#"
    }
    if (name.charAt(1) === "b") {
      out = out + "b"
    }
    if (out === "A#") {
      out = "Bb"
    }
    if (out === "B#") {
      out = "C"
    }
    if (out === "G#") {
      out = "Ab"
    }
    if (out === "Db") {
      out = "Csharp"
    }
    if (out === "C#") {
      out = "Csharp"
    }
    if (out === "F#") {
      out = "Fsharp"
    }
    if (out === "D#") {
      out = "Eb"
    }
    if (out === "E#") {
      out = "F"
    }

    return out
  }
  extractType(type) {
    if (type === "") {
      return "major"
    }
    if (type === "m") {
      return "minor"
    } else {
      return type
    }
  }

  harmonizeScale(props) {
    const defaultSetup = {
      strings: 6,
      fretsOnChord: 4,
      name: "Guitar",
      keys: [],
      tunings: {
        standard: ["E", "A", "D", "G", "B", "E"],
      },
    }
    const lite = false
    // console.log("HARMONIZER PROPS:", props)
    let scaleToHarmonize = teoria.scale(this.props.root, this.props.scale)
    // console.log("scaleToHarmonize:", scaleToHarmonize)
    let chords = []
    for (let i = 1; i <= scaleToHarmonize.scale.length; i++) {
      chords.push(i)
    }
    let allChords

    try {
      allChords = teoriaChordProgression(scaleToHarmonize, chords)
    } catch (e) {
      console.log("ERROR:", e)
    }
    // console.log("allChords:", allChords)
    let allChordsSeventh
    try {
      allChordsSeventh = teoriaChordProgression(scaleToHarmonize, chords, 4)
    } catch (e) {
      console.error("allChordsSeventh_error:", allChordsSeventh)
    }

    let renderChords = []
    let renderChordsSeventh = []
    let chord
    let currentGrade = 0
    const scaleGrades = ["I", "II", "III", "IV", "V", "VI", "VII"]
    allChords.chords.forEach(element => {
      let root = this.extractRoot(element.name)
      let type = this.extractType(element.symbol)

      chord = guitar.chords[`${root}`].find(chord => chord.suffix === `${type}`)

      renderChords.push(
        <div className="harmonizerChordbox">
          <div className="chordTitleBox">
            <span className="chordGrade">{scaleGrades[currentGrade]}</span>
            <span className="chordName">{root + " " + type}</span>
          </div>

          <Chord
            chord={chord.positions[0]}
            instrument={defaultSetup}
            lite={lite}
          />
        </div>
      )
      currentGrade += 1
    })

    // console.log(
    //   "allChordsSeventh:",
    //   allChordsSeventh.chords[0].name,
    //   allChords.chords[0].name
    // )
    if (
      allChordsSeventh &&
      allChordsSeventh.chords[0].name != allChords.chords[0].name
    ) {
      currentGrade = 0
      allChordsSeventh.chords.forEach(element => {
        let root = this.extractRoot(element.name)
        let type = this.extractType(element.symbol)

        chord = guitar.chords[`${root}`].find(
          chord => chord.suffix === `${type}`
        )
        // console.log("chord:", chord)
        // console.log("allChords:", allChords)

        renderChordsSeventh.push(
          <div className="harmonizerChordbox">
            <div className="chordTitleBox">
              <span className="chordGrade">{scaleGrades[currentGrade]}</span>
              <span className="chordName">{root + " " + type}</span>
            </div>

            <Chord
              chord={chord.positions[0]}
              instrument={defaultSetup}
              lite={lite}
            />
          </div>
        )
        currentGrade += 1
      })
    }
    this.setState({
      normalChords: renderChords,
      seventhChords: renderChordsSeventh,
    })
  }
  componentWillReceiveProps(newProps) {
    this.harmonizeScale(newProps)
  }
  componentWillMount() {
    this.harmonizeScale(this.props)
  }

  render() {
    // create teoria.scale object
    // var harmonicminor = teoria.scale("C", "minor")
    // let allScales = teoria.Scale.KNOWN_SCALES
    // chords 1-7 in heptatonic scale
    // var chords = [1, 2, 3, 4, 5, 6, 7]
    // var chords = [2, 5, 1]

    // construct a diatonic chord progression

    return (
      <React.Fragment>
        <div>
          <div className="">
            <h2 className="titles" id="chordByFred">
              {this.props.root} {this.props.scale} scale diatonic chords:
            </h2>
            <div className="harmonizerChordsBox">
              <div className="harmonizerChordsBox">
                {this.state.normalChords}
              </div>
            </div>
          </div>
          {this.state.seventhChords.length > 0 && (
            <div className="">
              <h2 className="titles" id="chordByFred">
                {this.props.root} {this.props.scale} scale seventh chords:
              </h2>
              <div className="harmonizerChordsBox">
                <div className="harmonizerChordsBox">
                  {this.state.seventhChords}
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    )
  }
}
export default Harmonizer
