import styled, { createGlobalStyle } from 'styled-components';
import BG from './images/BackgroundImg.jpg';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  display:flex ;
  justify-content:center ;
  margin:0 ;
  padding: 0 20px;
  background-image: url(${BG});
  background-size: cover;
}

* {
  box-sizing:border-box ;
  font-family: 'Catamaran', sans-serif;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    margin: 20px;
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold',
      sans-serif;
    background-image: linear-gradient(180deg, white, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, white, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
