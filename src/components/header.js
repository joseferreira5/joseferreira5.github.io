import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import resume from "../lib/resume.pdf"

const StyledHeader = styled.header`
  background: #f8f7f6;
  margin-bottom: 1.45rem;
`

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;

  a {
    margin-left: 1.5em;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`

const Logo = styled.h1`
  font-size: 2rem;
  border: 1px solid black;
  padding: 0.2em;
`

const Nav = styled.nav`
  display: flex;
`

const NavLink = styled.a`
  text-decoration: none;
  color: #000000;
`

const Header = () => (
  <StyledHeader>
    <Navbar>
      <NavLink>
        <Logo style={{ margin: 0 }}>Jose Ferreira</Logo>
      </NavLink>

      <Nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#portfolio">Work</NavLink>
        <NavLink href={resume} target="_blank" rel="noreferrer">
          Resume
        </NavLink>
        <NavLink href="#portfolio">Contact</NavLink>
      </Nav>
    </Navbar>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
