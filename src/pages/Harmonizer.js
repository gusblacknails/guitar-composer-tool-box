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

const guitar = require(`@tombatossals/chords-db/lib/guitar.json`)

const teoria = require("teoria"),
  teoriaChordProgression = require("teoria-chord-progression")

const MyChord = () => {
  const chord = {
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    barres: [1],
    capo: false,
  }
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: "Guitar",
    keys: [],
    tunings: {
      standard: ["E", "A", "D", "G", "B", "E"],
    },
  }
  const lite = false // defaults to false if omitted
  return <Chord chord={chord} instrument={instrument} lite={lite} />
}
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
    let scaleToHarmonize = teoria.scale(props.root, props.scale)
    // console.log("scaleToHarmonize:", scaleToHarmonize)
    let chords = []
    for (let i = 1; i <= scaleToHarmonize.scale.length; i++) {
      chords.push(i)
    }

    let allChords = teoriaChordProgression(scaleToHarmonize, chords)
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
          <span>{scaleGrades[currentGrade]}</span>
          <span>{root + type}</span>
          <Chord
            chord={chord.positions[0]}
            instrument={defaultSetup}
            lite={lite}
          />
        </div>
      )
      currentGrade += 1
    })
    console.log(
      "allChordsSeventh:",
      allChordsSeventh.chords[0].name,
      allChords.chords[0].name
    )
    if (
      allChordsSeventh &&
      allChordsSeventh.chords[0].name != allChords.chords[0].name
    ) {
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
            <Chord
              chord={chord.positions[0]}
              instrument={defaultSetup}
              lite={lite}
            />
          </div>
        )
      })
    }
    this.setState({
      normalChords: renderChords,
      seventhChords: renderChordsSeventh,
    })

    // const App = () =>
    //   <Chord chord={chord.positions[0]} instrument={guitar.main} />

    // export default App
  }
  componentWillReceiveProps(newProps) {
    this.harmonizeScale(newProps)
  }
  render() {
    // create teoria.scale object
    // var harmonicminor = teoria.scale("C", "minor")
    // let allScales = teoria.Scale.KNOWN_SCALES
    // console.log("harmonicminor:", harmonicminor)
    // console.log("allScales:", allScales)
    // chords 1-7 in heptatonic scale
    // var chords = [2, 5, 1]
    // var chords = [1, 2, 3, 4, 5, 6, 7]

    // construct a diatonic chord progression

    // or pass chord length argument to build 7th chords
    // var twoFiveOne7thChords = teoriaChordProgression(harmonicminor, chords, 4)
    // console.log("allSeventhChords:", twoFiveOne7thChords)
    // get teoria.chord by index
    // var Dmin7 = twoFiveOne7thChords.getChord(0)
    // var a4 = teoria.note("a4")
    // var flamenco = a4.scale("major")
    // var flamencoChords = teoriaChordProgression(flamenco, chords)
    // console.log("flamenco:", flamencoChords)
    // get simple representation
    // twoFiveOne7thChords.simple() // [ [ 'd3', 'f3', 'a3'
    // console.log("allSeventhChordsSimple:", twoFiveOne7thChords.simple())

    // Related Scales from a give chord
    // let relatedScales = Scale.
    // console.log("SCALESSSSS", Scale.names())
    // console.log("__SCALESSSSS", Scale.chords("ionian"))

    // console.log("modes:", PcSet.isEqual("c2 d5 e6", "c6 e3 d1"))
    // console.log("isChroma : ", PcSet.isChroma("101010101010"))

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
