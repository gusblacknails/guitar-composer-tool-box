import React from "react"
import Layout from "../components/layout"
import Home from "../components/Home"
import SEO from "../components/seo"
import Harmonizer from "./Harmonizer"
import GuitarChordFinder from "./guitar-chord-finder"
const IndexPage = () => (
  <React.Fragment>
    {/* <NavBar /> */}
    <Layout>
      <SEO title="Home" />

      <Home />
      <Harmonizer />
    </Layout>
  </React.Fragment>
)

export default IndexPage
