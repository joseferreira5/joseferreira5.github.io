import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
export default GlobalStyle
