import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const fonts = [
    { file: 'Nunito-Regular', weight: 400 },
    { file: 'Nunito-Medium', weight: 500 },
    { file: 'Nunito-Bold', weight: 700 },
    { file: 'Nunito-ExtraBold', weight: 800 },
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
  :root {
    --color-bg: #efeeee;

    --shadow-neu-out: 5px -5px 18px hsla(36, 10%, 80%, 0.5), -5px 5px 18px #ffffff;;
    --shadow-neu-in: inset 5px 5px 21px hsla(36, 10%, 80%, 0.5), inset -5px -5px 21px #ffffff;

    --color-primary: #3b6ef8;
    --color-primary-light: #5b8efb;
    --color-accent: #00d4d4;
    --color-blue-gradient: linear-gradient(135deg, #3b6ef8, #00d4d4);
    --color-white-gradient: linear-gradient(45deg, #eeeeee, #c8c8c8);

    --color-text: #5a5f7a;
    --color-text-light: #9098b0;
    --color-text-placeholder: #b0b8cc;

    --color-active: #3b6ef8;
    --color-inactive: #c8cad0;

    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-pill: 50px;

    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;

    --font-size-sm: 0.5rem;
    --font-size-md: 1rem;
    --font-size-lg: 2rem;
    --font-size-xxl: 4rem;
  }

  ${fontFaces}

  body {
      font-family: 'Nunito', sans-serif;
      letter-spacing: 0.07rem;
      background: var(--color-bg);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
