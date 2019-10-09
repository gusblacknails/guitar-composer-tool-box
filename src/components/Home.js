import React from "react"
import OutlinedInputAdornments from "./ChordListNav"
import ChordFinder from "./ChordFinder"

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      data: "",
      currentChord: "",
    }
  }
  callbackFunction = childData => {
    this.setState({ currentChord: childData })
  }

  render() {
    console.log("CurrentChord:", this.state.currentChord)
    return (
      <React.Fragment>
        <OutlinedInputAdornments parentCallback={this.callbackFunction} />
        {this.state.currentChord.length > 0 && (
          <ChordFinder chord={this.state.currentChord} />
        )}
      </React.Fragment>
    )
  }
}
