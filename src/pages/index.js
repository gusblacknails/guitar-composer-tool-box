import React from "react"
import NavBar from "../header"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Home from "../components/Home"
const IndexPage = () => (
  <React.Fragment>
    <NavBar />
    <Layout>
      <SEO title="Guitar Composers ToolBox" />

      <Home />
    </Layout>
  </React.Fragment>
)

export default IndexPage
