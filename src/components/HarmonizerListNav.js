import React from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby"
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
  "harmonic minor",
  "locrian",
  "major pentatonic",
  "melodic minor",
  "minor pentatonic",
  "whole tone",
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
    scaleName: "Major"

  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  let inputScale = [values.notes, values.scale]
 
  function slugify(string) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
  let ls = window.location.href.split( "/" );
    
  var filteredArray = ls.filter(function (el) {
    return el != "";
  });
  let lastElementFromDomain = filteredArray[filteredArray.length - 1]
  const sendData = () => {
    
    
    
    if(lastElementFromDomain!=="guitar-harmonizer" ){
      props.currentScale(inputScale)
    }else{
      
      console.log("GIUTAR HARMONIZER" , slugifiedLink)
      // navigate(`/guitar-harmonizer/${slugifiedLink}`)
    }
    
  }
  let noteName 
  
  if(values.notes.slice(-1)==="#"){
    noteName = `${values.notes.slice(0)} sharp`
  }else{
    noteName=values.notes
  }
  let slugifiedLink = slugify(noteName + " " + values.scale)
  const StaticPageLink = () => {
    if(lastElementFromDomain!=="guitar-harmonizer" ){
      return "Harmonize Scale"
    }else{
      return <Link id="sendToStaticLinkButton" href={"/guitar-harmonizer/" + slugifiedLink}>Harmonize Scale</Link>
    }

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
              <StaticPageLink/>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
