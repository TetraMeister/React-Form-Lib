import React from 'react';

import MultiFormInput from './MultiFormInput';
import StyledMultiFormErrors from './MultiFormErrors.styled';
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
            {errors?.[$name] && <StyledMultiFormErrors>{errors[$name].message}</StyledMultiFormErrors>}
        </StyledMultiFormGroup>
    );
}

export default MultiFormGroup;
