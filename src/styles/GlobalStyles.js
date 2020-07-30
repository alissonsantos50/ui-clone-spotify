import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    color: var(--white);
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
    --lightGray: #b3b3b3;
    --green: #1DB954;
  }

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background: var(--secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--lightGray);
  }
`;
