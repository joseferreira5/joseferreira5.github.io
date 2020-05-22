import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 500px;
  width: 100%;
`

const Heading = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

const Text = styled.p`
  font-size: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

const TextLink = styled(Link)`
  color: #98bbe3;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Heading>Hi, my name is Jose</Heading>
      <br />
      <Text>I'm a software engineer and web developer based in NYC.</Text>
      <br />
      <Text>
        Learn more about me <TextLink to="/about">here.</TextLink>
      </Text>
      <Text>
        Check out some of the <TextLink to="/portfolio">work</TextLink> I've
        done.
      </Text>
      <Text>
        Take a look at my <TextLink to="/resume">resume.</TextLink>
      </Text>
    </Container>
  </Layout>
)

export default IndexPage
