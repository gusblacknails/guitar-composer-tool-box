import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"

import "../css/nav.scss"

const notes = [
  {
    value: "A",
    label: "A",
  },
  {
    value: "A#",
    label: "A#/Bb",
  },
  {
    value: "B",
    label: "B",
  },
  {
    value: "C",
    label: "C",
  },
  {
    value: "C#",
    label: "C#/Db",
  },
  {
    value: "D",
    label: "D",
  },
  {
    value: "D#",
    label: "D#/Eb",
  },
  {
    value: "E",
    label: "E",
  },
  {
    value: "F",
    label: "F",
  },
  {
    value: "F#",
    label: "F#/Gb",
  },
  {
    value: "G",
    label: "G",
  },
  {
    value: "G#",
    label: "G#/Ab",
  },
]
const scaleNames = [
  "minor",
  "major",
  "blues",
  "ionian",
  "dorian",
  "phrygian",
  "lydian",
  "mixolydian",
  "aeolian",
  "harmonicminor",
  "locrian",
  "majorpentatonic",
  "melodicminor",
  "minorpentatonic",
  "wholetone",
]
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingLeft: "1em",
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}))

export default function ScaleList(props) {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    notes: "C",
    scale: "Major",
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  let inputScale = [values.notes, values.scale]
  const sendData = () => {
    props.currentScale(inputScale)
  }

  return (
    <div className="harmonizerSelectorBox">
      <div className="harmonizerSelectorSubBox">
        <form values={values} handleChangeForm={handleChange}>
          <div className={classes.root}>
            <TextField
              select
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              label="Select Root Note"
              value={values.notes}
              onChange={handleChange("notes")}
              InputProps={
                {
                  // startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                }
              }
            >
              {notes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              label="Select Scale"
              value={values.scale}
              onChange={handleChange("scale")}
              InputProps={
                {
                  // startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                }
              }
            >
              {scaleNames.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={sendData}
            >
              Harmonize Scale
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
