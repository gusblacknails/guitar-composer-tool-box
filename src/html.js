import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  const lang = props.htmlAttributes?.lang || `en`
  return (
    <html {...props.htmlAttributes} lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="guitar chords, ukulele chords, chord finder, scale harmonizer, triads, chord chart, chord progressions, CAGED, guitar composer tools" />
        <meta name="description" content="Free guitar and ukulele chord finder and scale harmonizer. Chord charts, fret filter, triads and variations for composers." />
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
