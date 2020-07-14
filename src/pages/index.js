import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/shared/heading"
import Text from "../components/shared/text"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #f8f7f6;
  flex-wrap: wrap;
  min-height: 500px;
  width: 100%;
  padding: 2em;
  border-radius: 1em;
  line-height: 1.6;
  opacity: 0.8;

  @media (max-width: 480px) {
    padding: 1em;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Heading>Hi, my name is Jose.</Heading>
      <br />
      <Text>I'm a software engineer and web developer based in NYC.</Text>
    </Container>
  </Layout>
)

export default IndexPage
