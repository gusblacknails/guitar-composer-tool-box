import React, { Component } from "react"
import Sketch from "react-p5"

export default class Fretboard extends Component {
  frets = 18
  fretboardHeigth = 200
  fretboardWidth = 1000
  numberOfStrings = 6
  sc = this.fretboardWidth
  mn = 17.817
  scale = parseFloat(this.sc)
  magic = parseFloat(this.mn)
  fretHeigth = this.fretboardHeigth / this.numberOfStrings

  fr1 = this.scale / this.magic
  fr2 = (this.scale - this.fr1) / this.magic
  fr3 = (this.scale - (this.fr1 + this.fr2)) / this.magic
  fr4 = (this.scale - (this.fr1 + this.fr2 + this.fr3)) / this.magic
  fr5 = (this.scale - (this.fr1 + this.fr2 + this.fr3 + this.fr4)) / this.magic
  fr6 =
    (this.scale - (this.fr1 + this.fr2 + this.fr3 + this.fr4 + this.fr5)) /
    this.magic
  fr7 =
    (this.scale -
      (this.fr1 + this.fr2 + this.fr3 + this.fr4 + this.fr5 + this.fr6)) /
    this.magic
  fr8 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7)) /
    this.magic
  fr9 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8)) /
    this.magic
  fr10 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9)) /
    this.magic
  fr11 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10)) /
    this.magic
  fr12 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11)) /
    this.magic
  fr13 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12)) /
    this.magic
  fr14 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12 +
        this.fr13)) /
    this.magic
  fr15 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12 +
        this.fr13 +
        this.fr14)) /
    this.magic
  fr16 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12 +
        this.fr13 +
        this.fr14 +
        this.fr15)) /
    this.magic
  fr17 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12 +
        this.fr13 +
        this.fr14 +
        this.fr15 +
        this.fr16)) /
    this.magic
  fr18 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12 +
        this.fr13 +
        this.fr14 +
        this.fr15 +
        this.fr16 +
        this.fr17)) /
    this.magic
  fr19 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12 +
        this.fr13 +
        this.fr14 +
        this.fr15 +
        this.fr16 +
        this.fr17 +
        this.fr18)) /
    this.magic
  fr20 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12 +
        this.fr13 +
        this.fr14 +
        this.fr15 +
        this.fr16 +
        this.fr17 +
        this.fr18 +
        this.fr19)) /
    this.magic
  fr21 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12 +
        this.fr13 +
        this.fr14 +
        this.fr15 +
        this.fr16 +
        this.fr17 +
        this.fr18 +
        this.fr19 +
        this.fr20)) /
    this.magic
  fr22 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12 +
        this.fr13 +
        this.fr14 +
        this.fr15 +
        this.fr16 +
        this.fr17 +
        this.fr18 +
        this.fr19 +
        this.fr20 +
        this.fr21)) /
    this.magic
  fr23 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12 +
        this.fr13 +
        this.fr14 +
        this.fr15 +
        this.fr16 +
        this.fr17 +
        this.fr18 +
        this.fr19 +
        this.fr20 +
        this.fr21 +
        this.fr22)) /
    this.magic
  fr24 =
    (this.scale -
      (this.fr1 +
        this.fr2 +
        this.fr3 +
        this.fr4 +
        this.fr5 +
        this.fr6 +
        this.fr7 +
        this.fr8 +
        this.fr9 +
        this.fr10 +
        this.fr11 +
        this.fr12 +
        this.fr13 +
        this.fr14 +
        this.fr15 +
        this.fr16 +
        this.fr17 +
        this.fr18 +
        this.fr19 +
        this.fr20 +
        this.fr21 +
        this.fr22 +
        this.fr23)) /
    this.magic

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(
      this.fretboardWidth - this.fretboardWidth / 3.6,
      this.fretboardHeigth,
      p5.WEBGL
    ).parent(canvasParentRef) // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.background(100)
    p5.noLoop()
  }
  draw = p5 => {
    p5.translate(-p5.width / 2, -p5.height / 2, 0)

    function drawFrets(x, y, z, fretHeigth, fretboardHeigth) {
      // p5.noStroke()

      // p5.fill(255, 204, 0)

      // p5.rect(y, z, x, fretHeigth)
      //INSTRUMENT FRETS
      p5.stroke(50)
      p5.fill("#A6A6A6")
      // p5.pointLight(0, 255, 0, 0, 50, 50)
      p5.rect(y, 0, 3, fretboardHeigth)
    }
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes

    let positionHeigth = this.fretHeigth
    for (var i = 0; i < this.numberOfStrings; i += 1) {
      // let positionWidth = this.fr1
      let positionWidth = 0

      for (var e = 0; e < this.frets; e += 1) {
        let fretWidth = this.fr1
        if (e === 1) {
          fretWidth = this.fr2
        }
        if (e === 2) {
          fretWidth = this.fr3
        }
        if (e === 3) {
          fretWidth = this.fr4
        }
        if (e === 4) {
          fretWidth = this.fr5
        }
        if (e === 5) {
          fretWidth = this.fr6
        }
        if (e === 6) {
          fretWidth = this.fr7
        }
        if (e === 7) {
          fretWidth = this.fr8
        }
        if (e === 8) {
          fretWidth = this.fr9
        }
        if (e === 9) {
          fretWidth = this.fr10
        }
        if (e === 10) {
          fretWidth = this.fr11
        }
        if (e === 11) {
          fretWidth = this.fr12
        }
        if (e === 12) {
          fretWidth = this.fr13
        }
        if (e === 13) {
          fretWidth = this.fr14
        }
        if (e === 14) {
          fretWidth = this.fr15
        }
        if (e === 15) {
          fretWidth = this.fr16
        }
        if (e === 16) {
          fretWidth = this.fr17
        }
        if (e === 17) {
          fretWidth = this.fr18
        }
        if (e === 18) {
          fretWidth = this.fr19
        }
        if (e === 19) {
          fretWidth = this.fr20
        }
        if (e === 20) {
          fretWidth = this.fr21
        }
        if (e === 21) {
          fretWidth = this.fr22
        }
        if (e === 22) {
          fretWidth = this.fr23
        }
        if (e === 23) {
          fretWidth = this.fr24
        }

        drawFrets(
          fretWidth,
          positionWidth,
          positionHeigth,
          this.fretHeigth,
          this.fretboardHeigth
        )

        positionWidth += fretWidth
      }

      positionHeigth += this.fretHeigth
    }
    positionHeigth = this.fretHeigth
    for (var i = 0; i < this.numberOfStrings; i += 1) {
      //INSTRUMENT STRINGS

      p5.fill("#222222")
      p5.rect(
        0,
        positionHeigth - this.fretHeigth / 2,
        this.fretboardWidth,
        1 + i / 3
      )
      positionHeigth += this.fretHeigth
    }
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />
  }
}
