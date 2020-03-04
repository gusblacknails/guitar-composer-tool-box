import React from "react"
import Sketch from "react-p5"
import ScaleList from "../components/HarmonizerListNav"
import Harmonizer from "../components/Harmonizer"
import Layout from "../components/layout"
import Fretboard from "../components/P5Fretboard"
import SwitchesGroup from "../components/switcherButtons"
import "../css/harmonizerChordStyles.css"

// import Nouislider from "nouislider-react"
// import "nouislider/distribute/nouislider.css"
// import ScaleRender from "../components/ScaleRender"

import "../css/nav.css"

import "../css/guitarChordFinder.css"
import SEO from "../components/seo"

export default class GuitarHarmonizer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoot: "C",
      currentScale: "major",
      variationState: false,
    }
  }

  callbackCurrentScale = childData => {
    if (childData) {
      this.setState({
        currentScale: childData[1] || this.state.currentScale,
        currentRoot: childData[0] || this.state.currentRoot,
      })
    }
  }
  callbackVariationState = childData => {
    console.log("CHILD_DATA:", childData)

    this.setState({
      variationState: childData,
    })
    // this.setState(prevState => ({
    //   variationState: !prevState.variationState,
    // }))
    console.log("SWITH_STATE:", this.state.variationState)
  }

  render() {
    return (
      <Layout>
        <SEO title="Guitar Scale Harmonizer" />
        <div className="ChordFinderTitleBox">
          <h1 className="ChordFinderTitle">GUITAR SCALE HARMONIZER</h1>
        </div>
        <div className="outerBox" id="out">
          <div className="middleBox" id="middle">
            <div className="innerBox" id="in">
              <div className="selectorBox">
                <ScaleList currentScale={this.callbackCurrentScale} />
                <div className="switchesBox">
                  <SwitchesGroup
                    variationsState={this.callbackVariationState}
                  />
                </div>
              </div>
              <Fretboard />
              <Harmonizer
                root={this.state.currentRoot}
                scale={this.state.currentScale}
                variations={this.state.variationState}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
