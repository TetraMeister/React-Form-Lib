import React from 'react';
import {
    StyledMultiFormNotification,
    StyledMultiFormNotificationIcon,
    StyledMultiFormNotificationText,
} from './MultiFormNotification.styled';
import { useMultiForm } from '../../hooks/useMultiForm';

function MultiFormNotification() {
    const { submitStatus } = useMultiForm();

    if (!submitStatus) {
        return null;
    }

    return (
        <StyledMultiFormNotification $status={submitStatus}>
            <StyledMultiFormNotificationIcon $status={submitStatus}>
                {submitStatus === 'success' ? '✓' : '✕'}
            </StyledMultiFormNotificationIcon>
            <StyledMultiFormNotificationText $status={submitStatus}>
                {submitStatus === 'success'
                    ? 'Formularz wysłany. Dziękujemy!'
                    : 'Coś poszło nie tak. Spróbuj ponownie.'}
            </StyledMultiFormNotificationText>
        </StyledMultiFormNotification>
    );
}

export default MultiFormNotification;
