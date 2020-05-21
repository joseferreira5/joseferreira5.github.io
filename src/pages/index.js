import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hi, I'm Jose Ferreira</h2>
    <p>I'm a software engineer .</p>
    <p>Now go build something great.</p>
    <p>
      Learn more about me <Link to="/about">here.</Link>
    </p>
    <p>
      Check out some of the <Link to="/portfolio">work</Link> I've done.
    </p>
    <p>
      Take a look at my skills and work history on my{" "}
      <Link to="/resume">resume.</Link>
    </p>
  </Layout>
)

export default IndexPage
