import { createGlobalStyle } from "styled-components";

import bg from "../assets/bg.png";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    height: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-rendering: optimizelegibility!important;
    -webkit-font-smoothing: antialiased!important;
    background-image: url(${bg});
    background-repeat: repeat;

    .Site {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
  }
`;

export default GlobalStyle;
