import styled, { css } from 'styled-components';

const TYPES = ['radio', 'checkbox'];

const StyledMultiFormInputContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;

    ${({ $type }) =>
        !TYPES.includes($type) &&
        css`
            justify-content: center;
            align-items: center;

            label {
                width: 75%;
                display: flex;
                justify-content: flex-start;
            }
        `}

    ${({ $type }) =>
        TYPES.includes($type)
            ? css`
                  align-items: center;
                  gap: var(--space-3);
                  padding: var(--space-3) var(--space-4);
                  background: var(--neu-bg);

                  &:has(input:focus-visible) {
                      outline: 2px solid var(--neu-accent);
                      outline-offset: 2px;
                  }

                  label {
                      position: relative;
                      display: flex;
                      align-items: center;
                      gap: var(--space-3);
                      color: var(--neu-text);
                      font-size: var(--font-size-md);
                      cursor: pointer;
                      user-select: none;
                  }

                  label::before {
                      content: '';
                      flex-shrink: 0;
                      width: 22px;
                      height: 22px;
                      background: var(--neu-bg);
                      box-shadow: var(--neu-shadow-out);
                      border-radius: ${$type === 'radio' ? '50%' : 'var(--radius-sm)'};
                      transition: box-shadow 0.2s ease-in-out;
                  }

                  label::after {
                      content: '';
                      position: absolute;
                      left: 6px;
                      width: 10px;
                      height: 10px;
                      background: var(--neu-accent);
                      border-radius: ${$type === 'radio' ? '50%' : '2px'};
                      transform: scale(0);
                      transition: transform 0.2s ease-in-out;
                  }

                  &:has(input:checked) label::before {
                      box-shadow: var(--neu-shadow-in);
                  }
                  &:has(input:checked) label::after {
                      transform: scale(1);
                  }
                  &:has(input:checked) label {
                      color: var(--neu-accent);
                      font-weight: 600;
                  }
              `
            : css`
                  flex-direction: column;
                  gap: var(--space-2);

                  label {
                      color: var(--neu-text);
                      font-size: var(--font-size-md);
                      font-weight: 500;
                  }
              `}
`;
export default StyledMultiFormInputContainer;
