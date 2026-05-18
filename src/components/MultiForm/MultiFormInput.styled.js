import styled, { css } from 'styled-components';

const styles = {
    text: css`
        padding: var(--space-3);
        color: var(--color-text);
        font-weight: 700;
        border-radius: var(--radius-lg);
        background: var(--color-white-gradient);
        box-shadow: var(--shadow-neu-in);

        &::placeholder {
            color: var(--color-text-placeholder);
        }

        ${({ $label }) =>
            $label &&
            css`
                &::placeholder {
                    color: transparent;
                }
            `}
    `,
    submit: css`
        font-weight: 600;
        border-radius: var(--radius-md);
        padding: var(--space-3) var(--space-5);
        background: var(--color-white-gradient);
        box-shadow: var(--shadow-neu-out);
        cursor: pointer;
        color: var(--color-text-placeholder);
    `,
    radio: css``,
};

const StyledMultiFormInput = styled.input`
    transition: all 200ms ease-in-out;
    outline: none;
    border: none;
    ${({ type }) => styles[type]}
`;

export default StyledMultiFormInput;
