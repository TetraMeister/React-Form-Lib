import React from 'react';
import MultiFormInput from './MultiFormInput';

import StyledMultiFormSection from './MultiFormSection.styled';

function MultiFormSection({ children, $nr, $prevStep, $onSubmit, $display }) {
    const isDisabled = !$prevStep;

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
            {children}
            <div>
                <button type="button" onClick={$prevStep} disabled={isDisabled}>
                    Prev
                </button>
                <MultiFormInput $type="submit" />
            </div>
        </StyledMultiFormSection>
    );
}

export default MultiFormSection;
