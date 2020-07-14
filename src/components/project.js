import React from "react"
import styled from "styled-components"

import Heading from "../components/shared/heading"
import Text from "../components/shared/text"
import githubLogo from "../images/GitHub_Logo.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 100%;
  margin: 1em 0;
`

const GithubLink = styled.a`
  display: flex;
  align-items: center;
`

export default function Project({ project }) {
  return (
    <Container>
      <Heading>{project.name}</Heading>
      <a href={project.deployedURL} target="_blank" rel="noreferrer">
        <Image src={project.image} alt={project.name} />
      </a>
      <Text>{project.description}</Text>
      <GithubLink href={project.githubURL} target="_blank" rel="noreferrer">
        <span>See on </span>
        <img src={githubLogo} alt="github logo" style={{ width: "70px" }} />
      </GithubLink>
    </Container>
  )
}
