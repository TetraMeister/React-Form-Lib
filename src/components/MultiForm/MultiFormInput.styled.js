import styled, { css } from 'styled-components';

const StyledMultiFormInput = styled.input`
    border: none;
    padding: var(--space-3);
    outline: none;
    color: var(--color-text);
    font-weight: 700;
    border-radius: var(--radius-lg);
    transition: all 200ms ease-in-out;
    background: var(--color-white-gradient);
    box-shadow: var(--shadow-neu-in);

    &::placeholder {
        color: var(--color-text-placeholder);
    }

    ${({ type }) =>
        type === 'submit' &&
        css`
            padding: var(--space-3) var(--space-5);
            background: var(--color-white-gradient);
            box-shadow: var(--shadow-neu-out);
            cursor: pointer;
            color: var(--color-text-placeholder);
        `};
`;

export default StyledMultiFormInput;
