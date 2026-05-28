import React from 'react';
import MultiFormInput from './MultiFormInput';
import { useMultiForm } from '../../hooks/useMultiForm';
import MultiFormNotification from './MultiFormNotification';

import StyledMultiFormSection from './MultiFormSection.styled';

function MultiFormSection({ children, $nr, $prevStep, $onSubmit, $display, $title }) {
    const isDisabled = !$prevStep;

    const { submitStatus } = useMultiForm();

    const fields = [
        ...new Set(
            React.Children.map(children, (child) => {
                if (child.props.$type === 'submit') {
                    return null;
                }
                return child.props.$name;
            }).filter(Boolean)
        ),
    ];

    return (
        <StyledMultiFormSection
            $nr={$nr}
            onSubmit={(ev) => {
                ev.preventDefault();
                $onSubmit(fields);
            }}
            $display={$display}
            noValidate
        >
            {submitStatus === null ? (
                <>
                    <h3>{$title}</h3>
                    {children}
                    <div className="section__controls">
                        <button type="button" onClick={$prevStep} disabled={isDisabled}>
                            Prev
                        </button>
                        <MultiFormInput $type="submit" />
                    </div>
                </>
            ) : (
                <MultiFormNotification />
            )}
        </StyledMultiFormSection>
    );
}

export default MultiFormSection;
