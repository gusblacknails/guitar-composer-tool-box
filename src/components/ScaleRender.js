import React from "react"
import { Fretboard, Fret } from "./scales"

export default class ScaleRender extends React.Component {
  constructor() {
    super()
    this.myRef = React.createRef()
    this.state = {
      currentScale: [],
    }
  }

  componentDidMount() {
    const scale = {
      major: [2, 2, 1, 2, 2, 2, 1],
      jonian: [2, 2, 1, 2, 2, 2, 1],
      dorian: [2, 1, 2, 2, 2, 1, 2],
      phrygian: [1, 2, 2, 2, 1, 2, 2],
      lydian: [2, 2, 2, 1, 2, 2, 1],
      mixolydian: [2, 2, 1, 2, 2, 1, 2],
      eolian: [2, 1, 2, 2, 1, 2, 2],
      locrian: [1, 2, 2, 1, 2, 2, 2],
      hexatonic: [2, 2, 2, 2, 2, 2],
      minor: [2, 1, 2, 2, 1, 2, 2],
      jazz_minor: [2, 1, 2, 2, 2, 2, 1],
    }
    const canvas = this.myRef.current
    console.log(Fretboard)
    const fretboard = new Fretboard(canvas, 24)
    fretboard.drawScale(scale.major, 2, 6, 15)
  }
  render() {
    return (
      <div>
        <canvas
          ref={this.myRef}
          id="theCanvas"
          width="1000"
          height="90"
          style={{ border: "0px solid #000000" }}
        >
          Does your browser support the canvas tag?
        </canvas>
      </div>
    )
  }
}
