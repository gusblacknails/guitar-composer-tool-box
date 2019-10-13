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
      currentChord: "",
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
    // // console.log("CurrentChord:", this.state.currentChord)
    // console.log("currentMinFret:", this.state.currentMinFret)
    // console.log("currentMaxFret:", this.state.currentMaxFret)
    return (
      <React.Fragment>
        <OutlinedInputAdornments currentChord={this.callbackCurrentChord} />
        {this.state.currentChord.length > 0 && (
          <ChordFinder chord={this.state.currentChord} />
        )}
        {this.state.currentChord.length > 0 && (
          <div className="chordBox">
            <div className="RangeBox">
              <h2 className="titles">Chords filtered by fret:</h2>
              <Nouislider
                className="rangeSlider"
                range={{ min: 0, max: 12 }}
                start={[0, 12]}
                step={1}
                tooltips={true}
                connect
                name="sliderValues"
                onUpdate={this.onChangeSlide.bind(this)}
              />
            </div>

            <FilterbyFret
              chord={this.state.currentChord}
              currentMinFret={this.state.currentMinFret}
              currentMaxFret={this.state.currentMaxFret}
            />
          </div>
        )}

        <ScaleRender />
      </React.Fragment>
    )
  }
}
