import styled, { css } from 'styled-components';

const StyledMultiFormSelect = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: var(--space-2);
    width: 100%;

    input[type='hidden'] {
        display: none;
    }

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 80%;
        gap: var(--space-2);
    }

    & > div > input[type='text'] {
        outline: none;
        width: 100%;
        padding: var(--space-3) var(--space-4);
        border: var(--neu-border-flat);
        border-color: transparent;
        border-radius: var(--radius-md);
        background: var(--neu-bg);
        color: var(--neu-text);
        font-size: var(--font-size-md);
        font-family: inherit;
        box-shadow: var(--neu-shadow-out);
        cursor: pointer;
        transition: box-shadow 0.2s ease-in-out;
        -webkit-appearance: none;
        appearance: none;

        &::placeholder {
            color: var(--neu-text-muted);
        }

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                outline: 2px solid var(--neu-accent);
                border-color: transparent;
                box-shadow: var(--neu-shadow-in);
            `}
    }

    label {
        width: 94%;
        display: flex;
        justify-content: flex-start;
        color: var(--neu-text);
        font-size: var(--font-size-md);
        font-weight: 500;
    }

    & > .select__options {
        position: absolute;
        top: calc(100% + var(--space-2));
        left: 0;
        right: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
        padding: var(--space-3);
        background: var(--neu-bg);
        border-radius: var(--radius-md);
        box-shadow: var(--neu-shadow-out);
    }

    & > .select__options button {
        width: 100%;
        padding: var(--space-3) var(--space-4);
        border: none;
        border-radius: var(--radius-sm);
        background: var(--neu-bg);
        color: var(--neu-text);
        font-size: var(--font-size-md);
        font-family: inherit;
        text-align: left;
        box-shadow: var(--neu-shadow-flat);
        cursor: pointer;
        transition:
            box-shadow 0.15s ease-in-out,
            color 0.15s ease-in-out;

        &:hover {
            box-shadow: var(--neu-shadow-in);
            color: var(--neu-accent);
        }

        &:focus-visible {
            outline: none;
            box-shadow: var(--neu-shadow-in);
            color: var(--neu-accent);
        }
    }
`;

export default StyledMultiFormSelect;
