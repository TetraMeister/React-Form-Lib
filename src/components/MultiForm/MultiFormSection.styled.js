import styled from 'styled-components';

const StyledMultiFormSection = styled.form`
    ${({ $display }) => ($display ? { display: 'flex' } : { display: 'none' })}

    gap: var(--space-6);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--space-4);
    width: 100%;
    background: var(--neu-bg);
    border-radius: var(--radius-lg);
    box-shadow: var(--neu-shadow-out);

    h3 {
        font-size: var(--font-size-lg);
        color: var(--neu-text);
        padding: var(--space-4);
    }

    .section__controls {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--space-4);
    }

    .section__controls > button {
        border: var(--neu-border-flat);
        border-color: transparent;

        padding: var(--space-3) var(--space-4);
        border: none;
        border-radius: var(--radius-md);
        background: var(--neu-bg);
        color: var(--neu-accent);
        font-size: var(--font-size-md);
        font-weight: 600;
        font-family: inherit;
        box-shadow: var(--neu-shadow-out);
        cursor: pointer;
        transition: box-shadow 0.15s ease-in-out;

        &:hover {
            box-shadow: var(--neu-shadow-flat);
        }

        &:active {
            box-shadow: var(--neu-shadow-in);
        }

        &:focus-visible {
            outline: 2px solid var(--neu-accent);
            outline-offset: 2px;
        }

        &:disabled {
            color: var(--neu-text-muted);
            box-shadow: var(--neu-shadow-in);
        }
    }
`;

export default StyledMultiFormSection;
