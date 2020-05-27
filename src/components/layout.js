import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import GlobalStyle from "./globalstyle"

import Header from "./header"
import Footer from "./footer"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #000000;
  min-height: 100vh;
`

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  height: 100%;
  padding: 0 1.0875rem 1.45rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)
