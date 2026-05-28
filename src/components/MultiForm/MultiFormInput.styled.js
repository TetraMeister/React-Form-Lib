import styled from 'styled-components';

const StyledMultiFormInput = styled.input`
    border: var(--neu-border-flat);
    border-color: transparent;
`;

const StyledMultiFormInputText = styled(StyledMultiFormInput)`
    width: 80%;
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius-md);
    background: var(--neu-bg);
    color: var(--neu-text);
    font-size: var(--font-size-md);
    font-family: inherit;
    box-shadow: var(--neu-shadow-in);
    transition:
        box-shadow 0.2s ease-in-out,
        border-color 0.2s ease-in-out;
    -webkit-appearance: none;
    appearance: none;

    &::placeholder {
        color: var(--neu-text-muted);
    }

    &:focus {
        outline: none;
        border: var(--neu-border-flat);
        box-shadow: var(--neu-shadow-flat);
    }
`;

const StyledMultiFormInputSubmit = styled(StyledMultiFormInput)`
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
`;

const StyledMultiFormInputCheck = styled(StyledMultiFormInput)`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
`;

export { StyledMultiFormInputCheck, StyledMultiFormInputText, StyledMultiFormInputSubmit };
