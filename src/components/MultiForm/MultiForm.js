import React from 'react';
import StyledMultiForm from './MultiForm.styled';
import MultiFormTitle from './MultiFormTitle';
import MultiFormStyles from '../../styles/MultiFormStyles';

import { MultiFormProvider, useMultiForm } from '../../hooks/useMultiForm';

function MultiForm({ $title, $width, $schema, $onSubmit, children }) {
    return (
        <>
            <MultiFormStyles />
            <MultiFormProvider $schema={$schema} $onSubmit={$onSubmit}>
                <MultiFormInner $title={$title} $width={$width}>
                    {children}
                </MultiFormInner>
            </MultiFormProvider>
        </>
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
                const isActive = step === currentStep;

                return React.cloneElement(child, {
                    $onSubmit: isLastStep ? handleFinalSubmit : handleNext,
                    $prevStep: !isFirstStep ? prevStep : null,
                    $display: isActive,
                });
            })}
        </StyledMultiForm>
    );
}

export default MultiForm;
