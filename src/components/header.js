import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;

  @media (max-width: 480px) {
    justify-content: center;
  }
`

const Logo = styled.h1`
  font-size: 2rem;
`

const Nav = styled.nav`
  display: flex;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 1em;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <Logo style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Logo>
      <Nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
