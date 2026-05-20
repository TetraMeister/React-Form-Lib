import styled from 'styled-components';

const StyledMultiFormSection = styled.form`
    ${({ $display }) => ($display ? { display: 'flex' } : { display: 'none' })}
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-4);
    width: 100%;
`;

export default StyledMultiFormSection;
