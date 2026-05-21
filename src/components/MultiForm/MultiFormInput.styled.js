import styled, { css } from 'styled-components';

const StyledMultiFormInput = styled.input`
    ${({ type }) => {
        if (type === 'radio' || type === 'checkbox') {
            return css`
                position: absolute;
                opacity: 0;
                width: 0;
                height: 0;
                margin: 0;
            `;
        }

        if (type === 'submit') {
            return css`
                width: 100%;
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
                transition:
                    box-shadow 0.15s ease-in-out,
                    color 0.15s ease-in-out;

                &:hover {
                    color: var(--neu-accent);
                }

                &:active {
                    box-shadow: var(--neu-shadow-in);
                }

                &:focus-visible {
                    outline: 2px solid var(--neu-accent);
                    outline-offset: 2px;
                }
            `;
        }

        return css`
            width: 100%;
            padding: var(--space-3) var(--space-4);
            border: var(--neu-border-flat);
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
                border-color: transparent;
                box-shadow: var(--neu-shadow-flat);
            }

            &[type='number'] {
                -moz-appearance: textfield;
            }
            &[type='number']::-webkit-outer-spin-button,
            &[type='number']::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        `;
    }}
`;

export default StyledMultiFormInput;
