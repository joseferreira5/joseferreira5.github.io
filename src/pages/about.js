import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Heading from "../components/shared/heading"
import Text from "../components/shared/text"

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f8f7f6;
  flex-wrap: wrap;
  min-height: 500px;
  width: 100%;
  padding: 1em;
  border-radius: 1em;
`

const ImageBox = styled.div`
  min-width: 300px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 400px;
  width: 50%;
`

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <ImageBox>
          <Image />
        </ImageBox>
        <Content>
          <Heading>About Me</Heading>
          <br />
          <Text>
            I have over 8 years of experience in the supply chain and logistics
            space.
          </Text>
          <Text>
            On my free time, I enjoy everything baseball related, and playing
            video games.
          </Text>
        </Content>
      </Container>
    </Layout>
  )
}
