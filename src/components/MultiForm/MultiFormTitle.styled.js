import styled from 'styled-components';

const StyledMultiFormTitle = styled.h2`
    font-size: ${({ $width }) => `${parseInt($width, 10) * 0.08}px`};
    font-weight: bold;
    color: var(--neu-accent);
`;

export default StyledMultiFormTitle;
