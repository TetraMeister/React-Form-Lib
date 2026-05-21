import styled from 'styled-components';

const StyledMultiFormSection = styled.form`
    /* ${({ $display }) => ($display ? { display: 'flex' } : { display: 'none' })} */
    border: 1px solid black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-4);
    width: 100%;
`;

export default StyledMultiFormSection;
