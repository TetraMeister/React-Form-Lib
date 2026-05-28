import styled, { css, keyframes } from 'styled-components';

const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const StyledMultiFormNotification = styled.div`
    width: 100%;
    border-radius: var(--radius-lg);
    padding: var(--space-5) var(--space-6);
    display: flex;
    align-items: center;
    gap: var(--space-3);
    animation: ${fadeInUp} 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;

    ${({ $status }) =>
        $status === 'error' &&
        css`
            box-shadow: var(--neu-shadow-out);
        `}

    ${({ $status }) =>
        $status === 'success' &&
        css`
            box-shadow: var(--neu-shadow-in);
        `}
`;

const StyledMultiFormNotificationIcon = styled.span`
    font-size: var(--font-size-md);
    line-height: 1;
    flex-shrink: 0;

    ${({ $status }) =>
        $status === 'error' &&
        css`
            color: #b05a6a;
            opacity: 0.75;
        `}

    ${({ $status }) =>
        $status === 'success' &&
        css`
            color: var(--neu-accent);
        `}
`;

const StyledMultiFormNotificationText = styled.span`
    font-size: var(--font-size-md);
    font-weight: 600;
    letter-spacing: 0.03em;
    text-shadow:
        1px 1px 1px var(--neu-shadow-light),
        -1px -1px 1px rgba(var(--neu-accent-rgb), 0.3);

    ${({ $status }) =>
        $status === 'error' &&
        css`
            color: #b05a6a;
            opacity: 0.75;
        `}

    ${({ $status }) =>
        $status === 'success' &&
        css`
            color: var(--neu-accent);
        `}
`;

export { StyledMultiFormNotification, StyledMultiFormNotificationIcon, StyledMultiFormNotificationText };
