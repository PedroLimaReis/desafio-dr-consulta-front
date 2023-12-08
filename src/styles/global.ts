import { createGlobalStyle } from "styled-components";


export const GlobalSyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px;
    }

    body {
      background-color: #fff;
      color: gray;
    }

    body, input, textarea, button {
      font: 400 1rem Roboto, sans-serif
    }
  }
`
