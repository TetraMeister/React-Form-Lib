import { createGlobalStyle } from 'styled-components';

const MultiFormStyles = createGlobalStyle`
    :root {
        --color-bg: #e0e0e0;

        --shadow-neu-out: 12px 12px 24px #c8cad0, -12px -12px 24px #ffffff;
        --shadow-neu-in: inset 12px 12px 24px #c8cad0, inset -12px -12px 24px #ffffff;

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

        --radius-sm: 4px;
        --radius-md: 8px;
        --radius-lg: 12px;
        --radius-pill: 25px;

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
`;

export default MultiFormStyles;
