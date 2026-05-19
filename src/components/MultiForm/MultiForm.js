import React from 'react';
import StyledMultiForm from './MultiForm.styled';
import MultiFormTitle from './MultiFormTitle';

import { MultiFormProvider, useMultiForm } from '../../hooks/useMultiForm';

function MultiForm(props) {
    const { $title, $width, $schema, $onSubmit, children } = props;

    return (
        <MultiFormProvider $schema={$schema} $onSubmit={$onSubmit}>
            <MultiFormInner $title={$title} $width={$width}>
                {children}
            </MultiFormInner>
        </MultiFormProvider>
    );
}

function MultiFormInner({ $title, $width, children }) {
    const { currentStep, handleNext, handleFinalSubmit, prevStep } = useMultiForm();

    const sectionList = React.Children.map(children, (child, index) => child.props.$nr ?? index + 1);
    const lastNumber = Math.max(...sectionList);
    const firstNumber = Math.min(...sectionList);

    const isLastStep = currentStep === lastNumber;
    const isFirstStep = currentStep === firstNumber;

    return (
        <StyledMultiForm $width={$width}>
            <MultiFormTitle $width={$width}>{$title}</MultiFormTitle>
            {React.Children.map(children, (child, index) => {
                const step = child.props.$nr ?? index + 1;
                if (step !== currentStep) {
                    return null;
                }

                return React.cloneElement(child, {
                    $onSubmit: isLastStep ? handleFinalSubmit : handleNext,
                    $prevStep: !isFirstStep ? prevStep : null,
                });
            })}
        </StyledMultiForm>
    );
}

export default MultiForm;
