import React from "react"
// import OutlinedInputAdornments from "../components/ChordListNav"
// import Nouislider from "nouislider-react"
// import UkeChordsFinder from "../components/UkeFinder"
import "nouislider/distribute/nouislider.css"
import "../css/guitarChordFinder.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import loadable from '@loadable/component'

const UkeChordsFinder = loadable(() => import('../components/UkeFinder'))
const Nouislider = loadable(() => import("nouislider-react"))
const OutlinedInputAdornments = loadable(() => import("../components/ChordListNav"))

export default class GuitarChordFinder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentChord: 'none',
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
        <SEO title="Ukulele Chord Finder" />
        <div
          className="UkeChordFinderTitleBox"
          title="Ukulele Chords Finder title background"
        >
          <h1 className="ChordFinderTitle">UKULELE CHORDS FINDER</h1>
          <h2 className="underH1">Ukelele Chords Chart for every root note and chord type</h2>
        </div>

        <div className="outerBox">
          <div className="middleBox">
            <div className="innerBox">
              <div className="selectorBox">
                <OutlinedInputAdornments
                  currentChord={this.callbackCurrentChord}
                />
              </div>

              {this.state.currentChord.length > 0 && (
                <React.Fragment>
                  <div className="ukeMainBox">
                    <div className="">
                      <h2 className="titles" id="chordByFred">
                        Ukulele Chords filtered by fret
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
                      <UkeChordsFinder
                        chord={this.state.currentChord}
                        currentMinFret={this.state.currentMinFret}
                        currentMaxFret={this.state.currentMaxFret}
                      />
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
