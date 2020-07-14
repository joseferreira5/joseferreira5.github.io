import React from "react"
import styled from "styled-components"

import githubLogo from "../images/GitHub-Mark-32px.png"
import linkedInLogo from "../images/LI-In-Bug.png"
import emailLogo from "../images/round_email_black_18dp.png"

const StyledFooter = styled.footer`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.0875rem;
  color: #000000;
  background-color: #f8f7f6;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

const Icons = styled.div`
  display: flex;
  align-items: center;
`

const Link = styled.a`
  margin-left: 0.5em;
`

export default function Footer() {
  return (
    <StyledFooter>
      <span>© Jose Ferreira {new Date().getFullYear()}</span>
      <Icons>
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
          <img
            src={linkedInLogo}
            style={{ width: "38px" }}
            alt="LinkedIn logo"
          />
        </Link>
        <Link href="mailto:jferreira590@gmail.com">
          <img src={emailLogo} />
        </Link>
      </Icons>
    </StyledFooter>
  )
}
