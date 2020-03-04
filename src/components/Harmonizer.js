import React from "react"
import "../css/chordFinder.css"
import Chord from "@tombatossals/react-chords/lib/Chord"
import "../css/harmonizerChordStyles.css"
import * as teoria from "teoria"
import * as teoriaChordProgression from "teoria-chord-progression"
import * as guitar from "@tombatossals/chords-db/lib/guitar.json"

class Harmonizer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      root: "C",
      scale: "Maj",
      normalChords: "",
      seventhChords: "",
      extraChordsBox: "extraChordsBox2",
    }
  }

  // DONT USE SCALES: chromatic, doubleharmonic, harmonicchromatic
  extractRoot(name) {
    let out
    if (name) {
      out = name.charAt(0)
    } else {
      return name
    }

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
    if (out === "Cb") {
      out = "B"
    }
    if (out === "Gb") {
      out = "Fsharp"
    }
    if (out === "Fb") {
      out = "E"
    }

    return out
  }
  extractType(type) {
    if (type == "") {
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
    this.setState({
      root: props.root,
      scale: props.scale,
    })

    let scale_root
    try {
      scale_root = this.extractRoot(props.root)
    } catch (e) {
      console.log("scale_root_error:", e)
    }

    if (scale_root === "Csharp") {
      scale_root = "C#"
      if (props.scale === "lydian") {
        scale_root = "Db"
      }
    }
    if (scale_root === "Fsharp") {
      scale_root = "F#"
    }
    if (scale_root === "Eb") {
      scale_root = "D#"
      if (
        props.scale === "major" ||
        props.scale === "ionian" ||
        props.scale === "lydian" ||
        props.scale === "mixolydian" ||
        props.scale === "harmonicminor" ||
        props.scale === "melodicminor"
      ) {
        scale_root = "Eb"
      }
    }
    if (scale_root === "Ab") {
      scale_root = "G#"
      if (
        props.scale === "major" ||
        props.scale === "ionian" ||
        props.scale === "lydian" ||
        props.scale === "harmonicminor" ||
        props.scale === "melodicminor"
      ) {
        scale_root = "Ab"
      }
    }

    let scaleText
    if (props.scale === "Major") {
      scaleText = "major"
    } else {
      scaleText = props.scale
    }

    let scaleToHarmonize = teoria.scale(scale_root, scaleText)

    let chords = []
    for (let i = 1; i <= scaleToHarmonize.scale.length; i++) {
      chords.push(i)
    }
    let allChords

    try {
      allChords = teoriaChordProgression(scaleToHarmonize, chords)
    } catch (e) {
      console.log("ERROR_teoriaChordProgression:", e)
    }

    let allChordsSeventh
    if (props.scale != "minorpentatonic" && props.scale != "majorpentatonic") {
      allChordsSeventh = teoriaChordProgression(scaleToHarmonize, chords, 4)
    }

    let renderChords = []
    let renderChordsSeventh = []
    let chord
    let currentGrade = 0
    const scaleGrades = ["I", "II", "III", "IV", "V", "VI", "VII"]

    if (allChords) {
      allChords.chords.forEach((element, index) => {
        let root = this.extractRoot(element.name)
        let type = this.extractType(element.symbol)
        let variationBoxColor

        if (index % 2 == 0 && this.state.extraChordsBox === "extraChordsBox1") {
          variationBoxColor = "variation1"
        } else {
          if (this.state.extraChordsBox === "extraChordsBox1") {
            variationBoxColor = "variation2"
          }
        }

        chord = guitar.chords[`${root}`].find(
          chord => chord.suffix === `${type}`
        )
        // console.log("allChords JUST BEFORE PETE:", element, root, type, chord)
        renderChords.push(
          <div className="harmonizerChordbox">
            <div className="chordTitleBox">
              <span className="chordGrade">{scaleGrades[currentGrade]}</span>
              <span className="chordName">{root + " " + type}</span>
            </div>

            <div className={`${variationBoxColor}`}>
              <div className="extraChord">
                <Chord
                  chord={chord.positions[0]}
                  instrument={defaultSetup}
                  lite={lite}
                />
              </div>

              <div className={this.state.extraChordsBox}>
                <Chord
                  chord={chord.positions[1]}
                  instrument={defaultSetup}
                  lite={lite}
                />
                <Chord
                  chord={chord.positions[2]}
                  instrument={defaultSetup}
                  lite={lite}
                />
                <Chord
                  chord={chord.positions[3]}
                  instrument={defaultSetup}
                  lite={lite}
                />
              </div>
            </div>
          </div>
        )

        currentGrade += 1
        // console.log("out chord OO:", root, type, chord.positions.length)
      })
    }

    // console.log(
    //   "allChordsSeventh:",
    //   allChordsSeventh.chords[0].name,
    //   allChords.chords[0].name
    // )
    if (
      allChordsSeventh &&
      allChordsSeventh.chords[0].name !== allChords.chords[0].name
    ) {
      currentGrade = 0
      allChordsSeventh.chords.forEach((element, index) => {
        let root = this.extractRoot(element.name)
        let type = this.extractType(element.symbol)
        let variationBoxColor

        if (index % 2 == 0 && this.state.extraChordsBox === "extraChordsBox1") {
          variationBoxColor = "variation1"
        } else {
          if (this.state.extraChordsBox === "extraChordsBox1") {
            variationBoxColor = "variation2"
          }
        }
        chord = guitar.chords[`${root}`].find(
          chord => chord.suffix === `${type}`
        )
        // console.log("chord:", chord)
        // console.log("allChords:", allChords)
        // console.log("in seventh chord:", root, type, chord)
        renderChordsSeventh.push(
          <div className="harmonizerChordbox">
            <div className="chordTitleBox">
              <span className="chordGrade">{scaleGrades[currentGrade]}</span>
              <span className="chordName">{root + " " + type}</span>
            </div>
            <div className={`${variationBoxColor}`}>
              <div className="">
                <Chord
                  chord={chord.positions[0]}
                  instrument={defaultSetup}
                  lite={lite}
                />
              </div>

              <div className={this.state.extraChordsBox}>
                <Chord
                  chord={chord.positions[1]}
                  instrument={defaultSetup}
                  lite={lite}
                />

                <Chord
                  chord={chord.positions[2]}
                  instrument={defaultSetup}
                  lite={lite}
                />

                <Chord
                  chord={chord.positions[3]}
                  instrument={defaultSetup}
                  lite={lite}
                />
              </div>
            </div>
          </div>
        )
        currentGrade += 1
        // console.log("out chord:", root, type, chord.positions[0])
      })
    }
    if (renderChords) {
      this.setState({
        normalChords: renderChords,
      })
    }
    if (renderChordsSeventh) {
      this.setState({
        seventhChords: renderChordsSeventh,
      })
    }
  }

  componentWillReceiveProps(newProps) {
    // console.log("PROPS WillReceiveProps:", newProps, this.state.extraChordsBox)
    if (newProps.variations === true) {
      this.setState({ extraChordsBox: "extraChordsBox1" }, () => {
        this.harmonizeScale(newProps)
      })
      // console.log(
      //   "RECIEVE WillReceiveProps state:",
      //   newProps,
      //   this.state.extraChordsBox
      // )
    } else {
      this.setState({ extraChordsBox: "extraChordsBox2" }, () => {
        this.harmonizeScale(newProps)
      })
      // console.log(
      //   "RECIEVE WillReceiveProps_ELSE state:",
      //   newProps,
      //   this.state.extraChordsBox
      // )
    }
  }
  componentWillMount() {
    // console.log("PROPS WILLMOUNT:", this.props)

    this.harmonizeScale(this.props)
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="">
            <h2 className="titles" id="chordByFred">
              {this.props.root} {this.props.scale} scale diatonic chords
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
                {this.props.root} {this.props.scale} scale seventh chords
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
