import React from 'react';
import StyledMultiFormError from './MultiFormError.styled';
import MultiFormInput from './MultiFormInput';
import StyledMultiFormGroup from './MultiFormGroup.styled';
import { useMultiForm } from '../../hooks/useMultiForm';

function MultiFormGroup({ $options, $type, $name, children }) {
    const { errors } = useMultiForm();

    const inputList = $options.map((option) => (
        <MultiFormInput key={option} $type={$type} $name={$name} $value={option} $label={option} />
    ));

    return (
        <StyledMultiFormGroup>
            <h4>{children}</h4>
            {inputList}
            {errors?.[$name] && <StyledMultiFormError>{errors[$name].message}</StyledMultiFormError>}
        </StyledMultiFormGroup>
    );
}

export default MultiFormGroup;
