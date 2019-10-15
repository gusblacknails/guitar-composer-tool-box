import React from "react"
import OutlinedInputAdornments from "./ChordListNav"
import ChordFinder from "./ChordFinder"
import FilterbyFret from "./FilterbyFret"
import Nouislider from "nouislider-react"
import ScaleRender from "./ScaleRender"
import "nouislider/distribute/nouislider.css"
import "../css/home.css"

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      currentChord: "C",
      currentMaxFret: 12,
      currentMinFret: 0,
    }
  }
  callbackCurrentChord = childData => {
    this.setState({ currentChord: childData })
  }

  onChangeSlide(data) {
    this.setState({
      currentMaxFret: Math.round(data[1]),
      currentMinFret: Math.round(data[0]),
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="mainTitle">The Guitar Composers ToolBox</h1>
        <h2 className="titleSentence">
          Find the chord or scale that fits into your song
        </h2>
        <OutlinedInputAdornments currentChord={this.callbackCurrentChord} />
        {this.state.currentChord.length > 0 && (
          <ChordFinder chord={this.state.currentChord} />
        )}
        {this.state.currentChord.length > 0 && (
          <div>
            <div className="RangeBox">
              <h2 className="titles">Chords filtered by fret:</h2>
              <Nouislider
                pips={{
                  mode: "values",
                  values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                  density: 2,
                }}
                className="rangeSlider"
                range={{ min: 0, max: 12 }}
                start={[0, 12]}
                step={1}
                connect
                name="sliderValues"
                onUpdate={this.onChangeSlide.bind(this)}
              />
            </div>
            <div className="chordFilteredBox">
              <FilterbyFret
                chord={this.state.currentChord}
                currentMinFret={this.state.currentMinFret}
                currentMaxFret={this.state.currentMaxFret}
              />
            </div>
          </div>
        )}

        {/* <ScaleRender /> */}
      </React.Fragment>
    )
  }
}
