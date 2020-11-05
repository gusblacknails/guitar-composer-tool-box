import React from "react"
import OutlinedInputAdornments from "../components/ChordListNav"
import ChordFinder from "../components/ChordFinder"
import FilterbyFret from "../components/FilterbyFret"
import Nouislider from "nouislider-react"
import Layout from "../components/layout"
// import ScaleRender from "../components/ScaleRender"
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
  majorChordFix(data) {
    let lastThree = data.substr(data.length - 3)
    if (lastThree === "Maj") {
      let newStr = data.substring(0, data.length - 3)
      return newStr
    } else {
      return data
    }
  }
  callbackCurrentChord = childData => {
    let fixedChord = this.majorChordFix(childData)
    this.setState({ currentChord: fixedChord })
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
        <SEO title="Guitar Chord Finder" />
       
        <div
          className="ChordFinderTitleBox"
          title="Guitar Chords Finder title background"
        >
          <h1 className="ChordFinderTitle">GUITAR CHORDS FINDER</h1>
          <h2 className="underH1">Guitar Chords Chart for every root note and chord type</h2>
        </div>
        <div className='textBox'>
          <h2 className="titles">How this Guitar Chord Finder works?</h2>
          <p>There are many guitar chord finders over the internet but with this one you’ll be able to find <b>all the possible positions over the neck</b> and choose the one that better fits your harmonic needs. </p>
          <p>Which position is the one that <b>has more notes in common</b> with the last chord I did? This is a common issue in the composition process and so often it is not easy to find this chord - there are many options and many variations on each of the shapes of the <b>CAGED system</b>. </p>
          <p>With this guitar chord finder you’ll find the chord you need. There is a fret filter to make it easier. You only have to select from which fret to which fret you want to look for. </p>
          <p>In order to begin using this tool the first thing to do is select the <b>root note</b> from the note selector. Once you have chosen the root note in the right side of this selector you’ll find another selector from where you can choose the <b>kind of chord</b> (  Power Chord, Major, minor, Dominant seventh…)</p>
          <p>Then click the <b>GET CHORD</b> button and you’ll see all the posibles shapes for this chord all over the neck.
          </p>
          <p>If you want to filter the chords  use the <b>fret filter</b> selector you can find under the Basic and Barre Chords section. Move the selectors over the first and last fret you want to look for.
        </p>
        <p>
          The numbers inside the black dots mean the <b>note of the scale in grades</b>. So for example,  <b>1</b> means the root note, <b>3</b> means the third note of the scale and so on. If you are looking for a minor chord the third will by minor ( one tone and a half from the root note) and if the chord you are looking for is major then the 3 is a major third ( 2 tones from the root)
      </p>
        </div>
        <div className="outerBox">
          <div className="middleBox">
            <div className="innerBox">
              <OutlinedInputAdornments
                currentChord={this.callbackCurrentChord}
              />
              {this.state.currentChord.length > 0 && (
                <React.Fragment>
                  {/* <UkeChordsFinder chord={this.state.currentChord} /> */}
                  <ChordFinder chord={this.state.currentChord} />
                  <div>
                    <div className="RangeBox">
                      <h2 className="titles" id="chordByFred">
                        Guitar Chords filtered by fret:
                      </h2>
                      <div className='infoBox'>
                      <span >Move the sliders for selecting first and last frets that will be shown</span>
                      </div>
                      
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
            </div>
          </div>
          
        </div>
        
       

      </Layout>
    )
  }
}
