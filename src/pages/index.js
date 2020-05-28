import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/shared/heading"
import Text from "../components/shared/text"
import resume from "../resume.pdf"

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

  @media (max-width: 480px) {
    padding: 1em;
  }
`

const TextLink = styled(Link)`
  color: #98bbe3;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Heading>Hi, my name is Jose.</Heading>
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
        Or take a look at my{" "}
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#98bbe3" }}
        >
          resume.
        </a>
      </Text>
    </Container>
  </Layout>
)

export default IndexPage
