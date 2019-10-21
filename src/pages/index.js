import React from "react"
import Layout from "../components/layout"
import Home from "../components/Home"
// import Image from "../components/image"
import SEO from "../components/seo"
import GuitarChordFinder from "./guitar-chord-finder"
const IndexPage = () => (
  <React.Fragment>
    {/* <NavBar /> */}
    <Layout>
      <SEO title="Home" />

      <Home />
    </Layout>
  </React.Fragment>
)

export default IndexPage
