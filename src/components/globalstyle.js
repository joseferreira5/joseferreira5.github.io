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
`
export default GlobalStyle
