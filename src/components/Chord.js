import { chord } from "tonal"

const TonalChord = props => {
  console.log("TOONAL:", props.chord)
  let tonalChord = chord(props.chord)
  return tonalChord
}

export default TonalChord
