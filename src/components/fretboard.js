let frets = 22
let fretboardHeigth = 200
let fretboardWidth = 800
let numberOfStrings = 6

let sc = fretboardWidth
const mn = 17.817
let scale = parseFloat(sc)
let magic = parseFloat(mn)
const fr1 = scale / magic
const fr2 = (scale - fr1) / magic
const fr3 = (scale - (fr1 + fr2)) / magic
const fr4 = (scale - (fr1 + fr2 + fr3)) / magic
const fr5 = (scale - (fr1 + fr2 + fr3 + fr4)) / magic
const fr6 = (scale - (fr1 + fr2 + fr3 + fr4 + fr5)) / magic
const fr7 = (scale - (fr1 + fr2 + fr3 + fr4 + fr5 + fr6)) / magic
const fr8 = (scale - (fr1 + fr2 + fr3 + fr4 + fr5 + fr6 + fr7)) / magic
const fr9 = (scale - (fr1 + fr2 + fr3 + fr4 + fr5 + fr6 + fr7 + fr8)) / magic
const fr10 =
  (scale - (fr1 + fr2 + fr3 + fr4 + fr5 + fr6 + fr7 + fr8 + fr9)) / magic
const fr11 =
  (scale - (fr1 + fr2 + fr3 + fr4 + fr5 + fr6 + fr7 + fr8 + fr9 + fr10)) / magic
const fr12 =
  (scale -
    (fr1 + fr2 + fr3 + fr4 + fr5 + fr6 + fr7 + fr8 + fr9 + fr10 + fr11)) /
  magic

const fr13 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12)) /
  magic
const fr14 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12 +
      fr13)) /
  magic
const fr15 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12 +
      fr13 +
      fr14)) /
  magic
const fr16 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12 +
      fr13 +
      fr14 +
      fr15)) /
  magic
const fr17 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12 +
      fr13 +
      fr14 +
      fr15 +
      fr16)) /
  magic
const fr18 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12 +
      fr13 +
      fr14 +
      fr15 +
      fr16 +
      fr17)) /
  magic
const fr19 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12 +
      fr13 +
      fr14 +
      fr15 +
      fr16 +
      fr17 +
      fr18)) /
  magic
const fr20 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12 +
      fr13 +
      fr14 +
      fr15 +
      fr16 +
      fr17 +
      fr18 +
      fr19)) /
  magic
const fr21 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12 +
      fr13 +
      fr14 +
      fr15 +
      fr16 +
      fr17 +
      fr18 +
      fr19 +
      fr20)) /
  magic
const fr22 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12 +
      fr13 +
      fr14 +
      fr15 +
      fr16 +
      fr17 +
      fr18 +
      fr19 +
      fr20 +
      fr21)) /
  magic
const fr23 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12 +
      fr13 +
      fr14 +
      fr15 +
      fr16 +
      fr17 +
      fr18 +
      fr19 +
      fr20 +
      fr21 +
      fr22)) /
  magic
const fr24 =
  (scale -
    (fr1 +
      fr2 +
      fr3 +
      fr4 +
      fr5 +
      fr6 +
      fr7 +
      fr8 +
      fr9 +
      fr10 +
      fr11 +
      fr12 +
      fr13 +
      fr14 +
      fr15 +
      fr16 +
      fr17 +
      fr18 +
      fr19 +
      fr20 +
      fr21 +
      fr22 +
      fr23)) /
  magic
let positionHeigth = 0

function setup() {
  createCanvas(fretboardWidth - fretboardWidth / 3.6, fretboardHeigth)
  background(100)
}

function draw() {
  function drawFrets(x, y, z) {
    rect(y, z, x, fretboardHeigth / numberOfStrings)
  }

  let positionWidth = 0
  let fretHeigth = fretboardHeigth / numberOfStrings

  for (var i = 0; i < numberOfStrings; i += 1) {
    for (var i = 0; i < frets; i += 1) {
      let fretWidth = fr1
      if (i === 1) {
        fretWidth = fr2
      }
      if (i === 2) {
        fretWidth = fr3
      }
      if (i === 3) {
        fretWidth = fr4
      }
      if (i === 4) {
        fretWidth = fr5
      }
      if (i === 5) {
        fretWidth = fr6
      }
      if (i === 6) {
        fretWidth = fr7
      }
      if (i === 7) {
        fretWidth = fr8
      }
      if (i === 8) {
        fretWidth = fr9
      }
      if (i === 9) {
        fretWidth = fr10
      }
      if (i === 10) {
        fretWidth = fr11
      }
      if (i === 11) {
        fretWidth = fr12
      }
      if (i === 12) {
        fretWidth = fr13
      }
      if (i === 13) {
        fretWidth = fr14
      }
      if (i === 14) {
        fretWidth = fr15
      }
      if (i === 15) {
        fretWidth = fr16
      }
      if (i === 16) {
        fretWidth = fr17
      }
      if (i === 17) {
        fretWidth = fr18
      }
      if (i === 18) {
        fretWidth = fr19
      }
      if (i === 19) {
        fretWidth = fr20
      }
      if (i === 20) {
        fretWidth = fr21
      }
      if (i === 21) {
        fretWidth = fr22
      }
      if (i === 22) {
        fretWidth = fr23
      }
      if (i === 23) {
        fretWidth = fr24
      }

      drawFrets(fretWidth, positionWidth, positionHeigth)
      positionWidth += fretWidth
    }

    positionHeigth += fretHeigth
  }
}
