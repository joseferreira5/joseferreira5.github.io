import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Container = styled.section`
  max-width: 500px;
`

const Heading = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Heading>About Me</Heading>
      <Container>
        <Image />
      </Container>
    </Layout>
  )
}
