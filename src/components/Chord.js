import { chord } from "tonal"

const TonalChord = props => {
  const tonalChord = chord(props.chord)
  return tonalChord
}

export default TonalChord
