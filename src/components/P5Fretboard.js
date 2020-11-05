import React, { Component } from "react"
import Sketch from "react-p5"

export default class Fretboard extends Component {
  frets = 22
  fretboardHeigth = 200
  fretboardWidth = window.innerWidth
  numberOfStrings = 6
  stringSpinColor = "#E9E3DF"
  firstStringsSpinColor = "#A6A6A6"
  stringSpinShadow = "#222222"
  nutColor = "white"
  fretsColor = "#A6A6A6"
  noteColor = "red"
  electricGuitarStrings = true
  neckColor = "#534441"
  tuning = ["e", "b", "g", "d", "a", "e"]
  notes = []
  lastFretWidth

  dots = true
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
      this.fretboardHeigth
      // p5.windowWidth / 8,
      // p5.windowHeight / 5.9
      // ,p5.WEBGL
    ).parent(canvasParentRef) // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.background(this.neckColor)

    p5.noLoop()
  }
  draw = p5 => {
    // p5.translate(-p5.width / 2, -p5.height / 2, 0)

    function drawFrets(
      x,
      y,
      z,
      fretHeigth,
      fretboardHeigth,
      fretNumber,
      nutColor,
      fretsColor
    ) {
      // FRET SQUARES
      // p5.noStroke()
      // p5.fill(255, 204, 0)
      // p5.rect(y, z, x, fretHeigth)

      //INSTRUMENT FRETS
      let shadow = p5.color("black")
      shadow.setAlpha(100)
      p5.stroke(shadow)
      p5.strokeWeight(1)
      let squareColor = p5.color("black")
      squareColor.setAlpha(100)
      // p5.noStroke()
      if (fretNumber === 0) {
        p5.fill(nutColor)
        p5.rect(y, 0, 10, fretboardHeigth)
      } else {
        p5.fill(fretsColor)
        p5.rect(y, 0, 3, fretboardHeigth)
        p5.stroke(squareColor)
        p5.strokeWeight(0.8)
        p5.line(y + 2, 2, y + 2, fretboardHeigth - 2)
      }

      p5.noStroke()
    }

    function drawNotes(
      noteColor,
      positionHeigth,
      positionWidth,
      fretWidth,
      fretHeigth,
      lastFretWidth
    ) {
      p5.fill(noteColor)
      p5.circle(
        positionWidth - fretWidth / 2 + 1,
        positionHeigth - fretHeigth / 2,
        lastFretWidth
      )
    }
    function drawDots(fretboardHeigth, fretNumber, positionWidth, fretWidth) {
      if (
        fretNumber === 3 ||
        fretNumber === 5 ||
        fretNumber === 7 ||
        fretNumber === 9 ||
        fretNumber === 15 ||
        fretNumber === 17 ||
        fretNumber === 19
      ) {
        p5.fill("white")
        p5.circle(positionWidth - fretWidth / 2, fretboardHeigth / 2, 10)
      }
      if (fretNumber === 12) {
        p5.fill("white")
        p5.circle(positionWidth - fretWidth / 2, fretboardHeigth / 3, 10)
        p5.circle(
          positionWidth - fretWidth / 2,
          fretboardHeigth - fretboardHeigth / 3,
          10
        )
      }
    }

    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes

    let positionHeigth = this.fretHeigth

    for (var i = 0; i < this.numberOfStrings; i += 1) {
      // let positionWidth = this.fr1
      let positionWidth = 0
      let fretNumber = 0

      for (var e = 0; e < this.frets + 1; e += 1) {
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
        this.lastFretWidth = fretWidth
        drawFrets(
          fretWidth,
          positionWidth,
          positionHeigth,
          this.fretHeigth,
          this.fretboardHeigth,
          fretNumber,
          this.nutColor,
          this.fretsColor
        )

        // NECK DOTS
        if (this.dots) {
          drawDots(this.fretboardHeigth, fretNumber, positionWidth, fretWidth)
        }

        positionWidth += fretWidth
        fretNumber += 1
      }

      positionHeigth += this.fretHeigth
    }
    positionHeigth = this.fretHeigth
    //INSTRUMENT STRINGS
    for (var i = 0; i < this.numberOfStrings; i += 1) {
      p5.fill(this.stringSpinShadow)
      p5.rect(
        0,
        positionHeigth - this.fretHeigth / 2,
        this.fretboardWidth,
        1 + i / 3
      )
      if (this.electricGuitarStrings) {
        if (i > 1) {
          for (var spin = 0; spin < this.scale; spin += 1.2) {
            p5.fill(this.stringSpinColor)
            p5.rect(spin, positionHeigth - this.fretHeigth / 2, 1, 1 + i / 3)
          }
        } else {
          for (var spin = 0; spin < this.scale; spin += 1.1) {
            p5.fill(this.firstStringsSpinColor)
            p5.rect(spin, positionHeigth - this.fretHeigth / 2, 1, 1 + i / 3)
          }
        }
      }

      positionHeigth += this.fretHeigth
    }

    positionHeigth = this.fretHeigth
    for (var i = 0; i < this.numberOfStrings; i += 1) {
      let positionWidth = 0
      console.log("this", this["fr" + i])
      for (var e = 0; e < this.frets + 1; e += 1) {
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

        drawNotes(
          this.noteColor,
          positionHeigth,
          positionWidth,
          fretWidth,
          this.fretHeigth,
          this.lastFretWidth - 3
        )

        positionWidth += fretWidth
      }

      positionHeigth += this.fretHeigth
    }
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />
  }
}
