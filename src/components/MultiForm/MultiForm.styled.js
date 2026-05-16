import styled from 'styled-components';

const StyledMultiForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-8);
    border-radius: var(--radius-lg);
    width: ${({ $width }) => $width || 'auto'};
`;

export default StyledMultiForm;
