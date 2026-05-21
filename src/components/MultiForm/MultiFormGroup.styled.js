import styled from 'styled-components';

const StyledMultiFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin: 0;
    padding: var(--space-5);
    border: none;
    background: var(--neu-bg);
    border-radius: var(--radius-lg);
    box-shadow: var(--neu-shadow-out);

    h4 {
        margin: 0 0 var(--space-2);
        color: var(--neu-text);
        font-size: var(--font-size-md);
        font-weight: 600;
        letter-spacing: 0.02em;
    }
`;

export default StyledMultiFormGroup;
