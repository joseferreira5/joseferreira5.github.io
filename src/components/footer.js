import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: block;
  text-align: center;
  padding: 1.45rem 1.0875rem;
`

export default function Footer() {
  return (
    <StyledFooter>
      © Jose Ferreira {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  )
}
