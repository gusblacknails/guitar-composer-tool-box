import React from "react"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import "../css/harmonizerChordStyles.scss"
export default function SwitchesGroup(props) {
  const [state, setState] = React.useState({
    chordVariations: false,
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
    props.variationsState(event.target.checked)
    console.log(event.target.checked, state)
  }

  return (
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.chordVariations}
              onChange={handleChange("chordVariations")}
              value="chordVariations"
            />
          }
          label="Chord Variations"
        />
      </FormGroup>
    </FormControl>
  )
}
