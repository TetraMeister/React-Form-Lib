import styled, { css } from 'styled-components';

const StyledMultiFormInputContainer = styled.div`
    display: flex;
    gap: 0.3rem;
    ${({ $type }) =>
        $type === 'radio' || $type === 'checkbox'
            ? css`
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
              `
            : css`
                  flex-direction: column;
                  label {
                      transform: translateX(5%);
                  }
              `}
`;
export default StyledMultiFormInputContainer;
