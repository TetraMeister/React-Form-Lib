import { createGlobalStyle } from 'styled-components';

const MultiFormStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --neu-bg: #e0e5ec;              
        --neu-text: #4d5b6e;
        --neu-text-muted: #8a97a8;
        --neu-accent: #5b7cfa;
        --neu-accent-text: #ffffff;

        --neu-shadow-dark: #a3b1c6;
        --neu-shadow-light: #ffffff;

        --neu-distance: 6px;
        --neu-blur: 12px;

        --neu-shadow-out:
        var(--neu-distance) var(--neu-distance) var(--neu-blur) var(--neu-shadow-dark),
        calc(var(--neu-distance) * -1) calc(var(--neu-distance) * -1) var(--neu-blur) var(--neu-shadow-light);

        --neu-shadow-in:
        inset var(--neu-distance) var(--neu-distance) var(--neu-blur) var(--neu-shadow-dark),
        inset calc(var(--neu-distance) * -1) calc(var(--neu-distance) * -1) var(--neu-blur) var(--neu-shadow-light);

        --neu-shadow-flat: none;
        --neu-border-flat: 1px solid var(--neu-shadow-light);

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
        --font-size-lg: 1.5rem;
        --font-size-xxl: 3rem;
    }
`;

export default MultiFormStyles;
