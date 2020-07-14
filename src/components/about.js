import React from "react"
import styled from "styled-components"

import Image from "../image"
import Heading from "../shared/heading"
import Text from "../shared/text"

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
    <Container>
      <ImageBox>
        <Image />
      </ImageBox>
      <Content>
        <Heading>About Me</Heading>
        <br />
        <Text>
          I am a product-focused front end developer who has recently
          transitioned from the US Army. I have transferred those soft skills
          from the military while learning how to build clean, fast UI with a
          focus on accessibility. The technologies I have focused on are HTML,
          CSS, Javascript, with the tools of Webpack, React, and Gatsby. I am
          also learning about design systems and front end architecture so that
          I can help teams build modular, scalable UI systems. As both an
          independent self-starter and collaborative team player, I seek the
          opportunity to work at an organization that places learning,
          development, and teamwork at the center of what they do.
        </Text>
      </Content>
    </Container>
  )
}
