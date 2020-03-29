import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto Slab', serif;
  }

  body {
    width: 100%;
    height: 100%;

    color: #fff;
    background: #57A5D6;
  }

  input, button {
    outline: none;
  }

  button {
    cursor: pointer;
  }

`;
