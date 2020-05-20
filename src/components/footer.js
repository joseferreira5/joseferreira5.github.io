import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Footer() {
  return (
    <StyledFooter>
      <span>Jose Ferreira</span> © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  )
}
