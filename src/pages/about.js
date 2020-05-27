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
  width: 60%;
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
            I am a solutions-oriented Web Developer and US Army Veteran who
            holds over 8 years experience in the supply chain management space.
            Whether it be solving multi-faceted logistical issues for infantry
            at war or de-bugging complex errors in code, I take a
            methodological, detail-oriented approach in developing real-time and
            effective solutions in high pressure situations. As both an
            independent self-starter and collaborative team player, I seek the
            opportunity to work at an organization that places learning,
            development and teamwork at the center of what they do.
          </Text>
        </Content>
      </Container>
    </Layout>
  )
}
