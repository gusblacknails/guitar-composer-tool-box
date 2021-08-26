import React, { useState } from 'react';

import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import loadable from '@loadable/component'
import { Key, Mode, ScaleType, Scale } from "@tonaljs/tonal";

const SwitchesGroup = loadable(() => import('../components/switcherButtons'))
const Harmonizer = loadable(() => import('../components/Harmonizer'))
const ScaleList = loadable(() => import('../components/HarmonizerListNav'))

function scaleNotes(rootNote ,scale){
    let scaleChords = Scale.get(`${rootNote} ${scale}`)
       
    let out = []
    scaleChords.notes.forEach(element => {
        
    if(element==="E#"){
        element = "F"
    }
    if(element==="G#"){
        element = "Ab"
    }
    if(element==="B#"){
        element = "C"
    }
    if(element==="A#"){
        element = "Bb"
    }
    if(element==="D#"){
        element = "Eb"
    }
    if(element==="C##"){
        element = "D"
    }
    if(element==="F##"){
        element = "G"
    }      
    out.push(element)  

    })
    return out
}

function selectTonalScale(rootNote, scaleName){
    let selectedScaleChords = []
    let scaleGrades
    switch(scaleName){
        case "major":
            selectedScaleChords = Key.majorKey(rootNote).chords
            break
        case "minor":
            selectedScaleChords = Key.minorKey(rootNote).natural.chords
            break
        case "harmonic minor":
            selectedScaleChords = Key.minorKey(rootNote).harmonic.chords
            break
        case "melodic minor":
            selectedScaleChords = Key.minorKey(rootNote).melodic.chords
            break
        case "ionian":
            selectedScaleChords = Mode.seventhChords("ionian", rootNote)
            break
        case "dorian":
            selectedScaleChords = Mode.seventhChords("dorian", rootNote)
            break
        case "phrygian":
            selectedScaleChords = Mode.seventhChords("phrygian", rootNote)
            break
        case "lydian":
            selectedScaleChords = Mode.seventhChords("lydian", rootNote)
            break
        case "mixolydian":
            selectedScaleChords = Mode.seventhChords("mixolydian", rootNote)
            break
        case "aeolian":
            selectedScaleChords = Mode.seventhChords("aeolian", rootNote)
            break
        case "locrian":
            selectedScaleChords = Mode.seventhChords("locrian", rootNote)
            break
        case "major pentatonic":
            scaleGrades = scaleNotes(rootNote, scaleName)
            selectedScaleChords = [`${scaleGrades[0]} minor`,`${scaleGrades[1]} sus4`,`${scaleGrades[2]} sus4`,`${scaleGrades[3]} major`,`${scaleGrades[4]} sus4`]
            break
        case "blues":
            scaleGrades = scaleNotes(rootNote, scaleName)
            selectedScaleChords = [`${scaleGrades[0]} sus4`,`${scaleGrades[1]} minor`,`${scaleGrades[2]} sus2`,`${scaleGrades[3]} minor`,`${scaleGrades[4]} sus4`,`${scaleGrades[5]} minor`]
            break
        case "minor pentatonic":
            scaleGrades = scaleNotes(rootNote, scaleName)
            selectedScaleChords = [`${scaleGrades[0]} sus4`,`${scaleGrades[1]} minor`,`${scaleGrades[2]} sus4`,`${scaleGrades[3]} sus4`,`${scaleGrades[4]} major`]
            break
        case "whole tone":
            scaleGrades = scaleNotes(rootNote, scaleName)
            selectedScaleChords = [`${scaleGrades[0]} aug`,`${scaleGrades[1]} aug`,`${scaleGrades[2]} aug`,`${scaleGrades[3]} aug`,`${scaleGrades[4]} aug`,,`${scaleGrades[5]} aug`]
            break
        default:
            selectedScaleChords = "No Chords"
        
    }
 
    return selectedScaleChords

   
}



export default ({ data }) => {
    
    var info = data.allChordScaleCombinationsJson.edges[0].node
    const [variations, setVariations] = useState(false);
    const [scale, setScale] = useState(info.scale);
    const [scaleName, setScaleName] = useState(info.scale_name);
    const [rootNote, setRootNote ] = useState(info.root_note)
    const [pageInfoBlock, setPageInfo ] = useState()
    let chords = selectTonalScale(rootNote, scaleName)
    

    function callbackVariationState() {
        if (variations){
            setVariations(false);
        }else{
            setVariations(true)
        }
       
      }
    function callbackCurrentScale(scale){
       
        setScaleName(scale[1])
        setScale(scale[1].replace(/\s/g, ""))
        setRootNote(scale[0])
    }

    function callbackSetPageInfo(){

        setPageInfo()
    }
   
    
    
    return (
        <Layout>
            <SEO
                title={info.root_note + " " + info.scale_name + " Chords"}
                description={"All the guitar chords to play in the " + info.root_note + " " + info.scale_name +  " wich has these degress," + info.degrees  + ", and these intervals, " + info.intervals + " The chords of the " + info.root_note + " " + info.scale_name + "scale, are:" + chords }

            />
       
            <div className="ChordFinderTitleBox">
                <h1 className="ChordFinderTitle">{rootNote + " " + scaleName + " chords"}</h1>
                <h2 className="underH1">{"All the guitar chords to play with the " + rootNote + " " + scaleName +  " scale"}</h2>
            </div>
            <div className="outerBox" id="out">
                <div className="middleBox" id="middle">
                    <div className="innerBox" id="in">
                        <div className="harmonizer">
                            <div className="selectorBox">
                                <ScaleList currentScale={callbackCurrentScale} />
                                <div className="switchesBox">
                                    <SwitchesGroup
                                        variationsState={callbackVariationState}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* <Fretboard /> */}
                        <Harmonizer
                            root={rootNote}
                            scale={scale}
                            scaleName={scaleName}
                            variations={variations}
                            
                        />
                    </div>
                </div>
            </div>
        
        </Layout>

    )


}




export const query = graphql`
query($slug: String!)
 {
    allChordScaleCombinationsJson (filter : { slug : { eq : $slug} } )
        {
        edges{
            node{
                intervals
                note_alt_names
                root_note
                scale
                scale_name
                slug
                degrees
            }
            
        }
       
    }
  }
  `
