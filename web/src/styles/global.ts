import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    color: #FFF;
    background: #EBF2F5;
  }

  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }
`;