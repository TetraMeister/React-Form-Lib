import React from 'react';

import StyledMultiFormGroup from './MultiFormGroup.styled';
import { useMultiForm } from '../../hooks/useMultiForm';

import MultiFormInput from './MultiFormInput';

function MultiFormGroup({ $options, $type, $name, children }) {
    const { errors } = useMultiForm();

    const inputList = $options.map((option) => (
        <MultiFormInput key={option} $type={$type} $name={$name} $value={option} $label={option} />
    ));

    return (
        <StyledMultiFormGroup>
            <h4>{children}</h4>
            {inputList}
            {errors?.[$name] && <span>{errors[$name].message}</span>}
        </StyledMultiFormGroup>
    );
}

export default MultiFormGroup;
