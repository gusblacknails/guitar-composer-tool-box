import React from "react"
import OutlinedInputAdornments from "../components/ChordListNav"
import ChordFinder from "../components/ChordFinder"
import FilterbyFret from "../components/FilterbyFret"
import Nouislider from "nouislider-react"
import Layout from "../components/layout"
import ScaleRender from "../components/ScaleRender"
import UkeChordsFinder from "../components/UkeFinder"
import "nouislider/distribute/nouislider.css"
import "../css/guitarChordFinder.css"
import SEO from "../components/seo"

export default class GuitarChordFinder extends React.Component {
  constructor(props) {
    super(props)
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
    console.log("STATE:", this.state)
    return (
      <Layout>
        <SEO title="Guitar Chord Finder" />
        <OutlinedInputAdornments currentChord={this.callbackCurrentChord} />
        {this.state.currentChord.length > 0 && (
          <React.Fragment>
            <UkeChordsFinder chord={this.state.currentChord} />
            <ChordFinder chord={this.state.currentChord} />
            <div>
              <div className="RangeBox">
                <h2 className="titles" id="chordByFred">
                  Guitar Chords filtered by fret:
                </h2>
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
          </React.Fragment>
        )}
      </Layout>
    )
  }
}