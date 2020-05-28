import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/shared/heading"
import Text from "../components/shared/text"
import projects from "../projects"
import githubLogo from "../images/GitHub_Logo.png"

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #f8f7f6;
  min-height: 500px;
  width: 100%;
  padding: 2em;
  border-radius: 1em;
  line-height: 1.6;

  @media (max-width: 480px) {
    padding: 1em;
  }
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 2px solid black;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const Image = styled.img`
  width: 100%;
  margin: 1em 0;
`

const GithubLink = styled.a`
  display: flex;
  align-items: center;
`

export default function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Container>
        {projects.map((project, i) => (
          <Project key={i}>
            <Heading>{project.name}</Heading>
            <a href={project.deployedURL} target="_blank" rel="noreferrer">
              <Image src={project.image} alt={project.name} />
            </a>
            <Text>{project.description}</Text>
            <GithubLink
              href={project.githubURL}
              target="_blank"
              rel="noreferrer"
            >
              <span>See on </span>
              <img
                src={githubLogo}
                alt="github logo"
                style={{ width: "70px" }}
              />
            </GithubLink>
          </Project>
        ))}
      </Container>
    </Layout>
  )
}
