import React from "react"
import NavBar from "../header"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import GuitarChordFinder from "./guitar-chord-finder"
const IndexPage = () => (
  <React.Fragment>
    {/* <NavBar /> */}
    <Layout>
      <SEO title="Guitar Composers ToolBox" />

      <GuitarChordFinder />
    </Layout>
  </React.Fragment>
)

export default IndexPage
