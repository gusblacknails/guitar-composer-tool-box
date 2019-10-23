import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"

// import { chord } from "tonal-dictionary"

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
const chordTypes = [
  {
    value: "5",
    label: "Power chord",
  },
  {
    value: "Maj",
    label: "Major",
  },
  {
    value: "min",
    label: "Minor",
  },
  {
    value: "7",
    label: "Dominant seventh",
  },
  {
    value: "maj7",
    label: "Major seventh",
  },
  {
    value: "m7",
    label: "Minor seventh",
  },
  {
    value: "aug",
    label: "Augmented",
  },
  {
    value: "dim",
    label: "Diminished",
  },
  {
    value: "m(add9)",
    label: "Minor, added ninth",
  },
  {
    value: "add4",
    label: "Added fourth",
  },
  {
    value: "sus4",
    label: "Suspended fourth",
  },
  {
    value: "sus2",
    label: "Suspended second",
  },
  {
    value: "add9",
    label: "Added ninth",
  },

  {
    value: "m7b5",
    label: "Minor seventh, flat fifth",
  },

  {
    value: "6",
    label: "Sixth",
  },
  {
    value: "m6",
    label: "Minor sixth",
  },
  {
    value: "mb6",
    label: "Minor, flat sixth",
  },
  {
    value: "m6/9",
    label: "Minor sixth, added ninth",
  },
  {
    value: "maj6",
    label: "Major Sixth",
  },
  {
    value: "6/9",
    label: "Sixth, added ninth",
  },
  {
    value: "maj9",
    label: "Major ninth",
  },
  {
    value: "m9",
    label: "Minor ninth",
  },
  {
    value: "m9(Maj7)",
    label: "Minor ninth, major seventh",
  },
  {
    value: "m9b5",
    label: "Minor ninth flat fifth",
  },
  {
    value: "Maj11",
    label: "Major eleventh",
  },
  {
    value: "m(maj7)",
    label: "Minor, major seventh",
  },
  // {
  //   value: "m13",
  //   label: "Minor thirteen",
  // },
  // {
  //   value: "maj7#11",
  //   label: "Major seventh, sharp eleventh",
  // },
  {
    value: "maj13",
    label: "Major thirteen",
  },
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

export default function OutlinedInputAdornments(props) {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    notes: "",
    chordTypes: "",
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  // const chordTypes = chord.names()
  let inputChord = `${values.notes}${values.chordTypes}`
  const sendData = () => {
    props.currentChord(inputChord)
  }

  return (
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
          label="Select Type of Chord"
          value={values.chordTypes}
          onChange={handleChange("chordTypes")}
          InputProps={
            {
              // startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
            }
          }
        >
          {chordTypes.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={sendData}
        >
          Get Chord
        </Button>
      </div>
    </form>
  )
}
