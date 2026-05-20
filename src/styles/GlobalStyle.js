import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const fonts = [
    { file: 'Montserrat-Light', weight: 300 },
    { file: 'Montserrat-Medium', weight: 500 },
    { file: 'Montserrat-Bold', weight: 700 },
    { file: 'Montserrat-Regular', weight: 400 },
];

const fontFaces = fonts
    .map(
        ({ file, weight }) => `
          @font-face {
              font-family: 'Nunito';
              src: url('../assets/fonts/${file}.ttf') format('truetype');
              font-weight: ${weight};
              font-style: normal;
              font-display: swap;
          }
        `
    )
    .join('');

const GlobalStyle = createGlobalStyle`

  ${fontFaces}

  body {
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 0.07rem;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
