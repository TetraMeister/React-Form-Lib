import React, { useState } from 'react';

import StyledMultiFormGroup from './MultiFormGroup.styled';
import { useMultiForm } from '../../hooks/useMultiForm';

import MultiFormInput from './MultiFormInput';

function MultiFormGroup({ $options, $type, $name, children, $variant }) {
    const { errors } = useMultiForm();
    const [isOpen, setIsOpen] = useState(false);

    const inputList = $options.map((option) => (
        <MultiFormInput key={option} $type={$type} $name={$name} $value={option} $label={option} />
    ));

    return (
        <StyledMultiFormGroup $variant={$variant}>
            {$variant === 'select' ? (
                <button type="button" onClick={() => setIsOpen((state) => !state)}>
                    {children}
                </button>
            ) : (
                <h4>{children}</h4>
            )}
            {($variant !== 'select' || isOpen) && inputList}
            {errors?.[$name] && <span>{errors[$name].message}</span>}
        </StyledMultiFormGroup>
    );
}

export default MultiFormGroup;
