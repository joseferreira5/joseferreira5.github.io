import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const StyledHeader = styled.header`
  background: #f8f7f6;
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
  border: 1px solid black;
  padding: 0.2em;
`

const Nav = styled.nav`
  display: flex;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  margin-left: 1em;
`

const Header = () => (
  <StyledHeader>
    <Container>
      <Logo style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          JF
        </Link>
      </Logo>
      <Nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
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
