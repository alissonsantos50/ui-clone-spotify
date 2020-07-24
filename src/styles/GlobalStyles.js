import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vh;


    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Arial, sans-serif;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #121212;
    --secondary: #1b1b1b;
    --white: #F1F1F1;
    --gray: #646464;
    --green: #1DB954;
  }
`;
