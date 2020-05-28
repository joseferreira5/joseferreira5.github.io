import React from "react"
import styled from "styled-components"

import githubLogo from "../images/GitHub-Mark-Light-32px.png"
import linkedInLogo from "../images/LI-In-Bug.png"

const StyledFooter = styled.footer`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 1.45rem 1.0875rem;
  color: #f8f7f6;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

const Link = styled.a`
  margin-left: 0.5em;
`

export default function Footer() {
  return (
    <StyledFooter>
      © Jose Ferreira {new Date().getFullYear()}, Built with
      {` `}
      <Link href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
        Gatsby
      </Link>
      {` `}
      <Link
        href="https://github.com/joseferreira5"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubLogo} alt="GitHub logo" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jose-ferreira5/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedInLogo} style={{ width: "38px" }} alt="LinkedIn logo" />
      </Link>
    </StyledFooter>
  )
}
