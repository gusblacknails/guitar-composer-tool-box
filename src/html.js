import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta name='keywords' content='guitar chords, ukulele chords, ukelele chords, beginner chords, barre chords, power chords, major, minor, maj7, maj9, maj13, triads, quatriads, add9, chord inversions, maj7b5, maj7#5, m7, m9, m11, m13, m6, madd9, m6add9,chord progressions, chord diagrams, chord chart,  m7b5, m7#5, 7sus4, 11b9, aug, dim, dim7, sus4, sus2'/>
        <meta name='description' content='Chord finder for guitar and ukulele. Shows all combinations for each type of chord all over the neck. Also has a fret filter in order to show only chords between selected frets. There is also a Guitar Scale Harmonizer that lets you find the chords under the most common scales. Shows triads, quatriads and their possible variations'/>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
       
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
