import React from "react"
import ScaleList from "../components/HarmonizerListNav"
import Harmonizer from "../components/Harmonizer"
import Layout from "../components/layout"
// import Nouislider from "nouislider-react"
// import "nouislider/distribute/nouislider.css"
// import ScaleRender from "../components/ScaleRender"
import "../css/harmonizerChordStyles.css"

import "../css/guitarChordFinder.css"
import SEO from "../components/seo"

export default class GuitarHarmonizer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoot: "C",
      currentScale: "major",
      currentMaxFret: 12,
      currentMinFret: 0,
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
  onChangeSlide(data) {
    this.setState({
      currentMaxFret: Math.round(data[1]),
      currentMinFret: Math.round(data[0]),
    })
  }
  render() {
    return (
      <Layout>
        <SEO title="Guitar Scale Harmonizer" />
        <div className="ChordFinderTitleBox">
          <h1 className="ChordFinderTitle">GUITAR SCALE HARMONIZER</h1>
        </div>

        <ScaleList currentScale={this.callbackCurrentScale} />

        <Harmonizer
          root={this.state.currentRoot}
          scale={this.state.currentScale}
        />
      </Layout>
    )
  }
}
