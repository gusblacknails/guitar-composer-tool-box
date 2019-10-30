import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/article.css"
import "../css/what-is-this-about.css"
const whatIsThisAbout = () => (
  <React.Fragment>
    <Layout>
      <SEO title="Triads" />
      <div className="homeBox">
        <div className="textContent">
          <p>
            The Guitar Composers Toolbox aims to be a site where composers can
            find <b>interactive guitar tools</b> that will help them throughout
            the composition process.
          </p>
          <p>
            {" "}
            During this process, as a composer, you can get stuck at some point
            trying to decide which is the best chord or scale for your
            progression/ arrangement. Or simply you don’t know which of the
            chord variations will fit better or will be{" "}
            <b> harmonically consistent</b> with the other chords. In this case,
            our <b>Chord Finder</b> lets you filter by frets showing only the
            chords that are between two given frets. This is very helpful when
            you want to harmonize melodies and moving the melody line is not an
            option. When you’re creating a fingerstyle arrange you need to know
            at every moment which are the chords that are in{" "}
            <b>close proximity</b> with your last choice in order to guarantee
            the <b>harmonic cohesion</b>.
          </p>
          <p>
            {" "}
            The
            <b> Ukelele Chord Finder</b> works like the Guitar Chord Finder
            letting you filter between two given frets in order to find the most
            appropriate chord. Some other tools are being developed such as a
            <b> Scale Finder, Scale Harmonizer</b> or an interactive app for
            learning fast ascending and descending flamenco scales for any of
            the common styles -palos- inside the genre.
          </p>
          <p>
            {" "}
            The <b>articles section</b> will show interesting articles about
            guitar/ukelele <b>techniques for composition</b> that will try to
            cover the most common scenarios and difficulties a composer can
            find.
          </p>
        </div>
      </div>
    </Layout>
  </React.Fragment>
)

export default whatIsThisAbout
