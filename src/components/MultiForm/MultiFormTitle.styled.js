import styled from 'styled-components';

const StyledMultiFormTitle = styled.h2`
    font-size: ${({ $width }) => `${parseInt($width, 10) * 0.08}px`};
    font-weight: 800;
    background: var(--color-blue-gradient);
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export default StyledMultiFormTitle;
