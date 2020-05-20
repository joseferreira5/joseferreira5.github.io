import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin: 0 auto;
  margin-bottom: 1.45rem;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
