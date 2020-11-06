import React from "react"
import Layout from "../components/layout"
// import Home from "../components/Home"
import SEO from "../components/seo"
import loadable from '@loadable/component'
const Home = loadable(() => import('../components/Home'))

const IndexPage = () => (
  <React.Fragment>
    {/* <NavBar /> */}
    <Layout>
      <SEO
        title="Guitar Composers Tool Box"
        description="Tools for guitar and ukulele composers such as chords finders or scales harmonizer"
      />

      <Home />
      {/* <Harmonizer /> */}
    </Layout>
  </React.Fragment>
)

export default IndexPage
