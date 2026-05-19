import React from 'react';

import StyledMultiFormSection from './MultiFormSection.styled';

function MultiFormSection(props) {
    const { children, $nr, $prevStep, $onSubmit } = props;

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
        >
            {children}
            <button type="button" onClick={$prevStep} disabled={isDisabled}>
                Prev
            </button>
        </StyledMultiFormSection>
    );
}

export default MultiFormSection;
