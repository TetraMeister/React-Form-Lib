import React, { useId, useState } from 'react';
import StyledMultiFormSelect from './MultiFormSelect.styled';
import { useMultiForm } from '../../hooks/useMultiForm';

function MultiFormSelect({ $options, children, $name }) {
    const { setValue, register, displayValues, setDisplayValue } = useMultiForm();
    const [isOpen, setIsOpen] = useState(false);
    const id = useId();

    const displayValue = displayValues[$name] ?? '';

    const handleIsOpen = () => {
        setIsOpen((state) => !state);
    };

    const handleValueChange = (option) => {
        setValue($name, String(option));
        setDisplayValue($name, String(option));
        setIsOpen(false);
    };

    return (
        <StyledMultiFormSelect>
            <input type="hidden" {...register($name)} />
            <label htmlFor={id}>{children}</label>
            <input id={id} type="text" readOnly value={displayValue} onClick={handleIsOpen} />
            <div>
                {isOpen &&
                    $options?.map((option) => (
                        <button type="button" key={option} onClick={() => handleValueChange(option)}>
                            {option}
                        </button>
                    ))}
            </div>
        </StyledMultiFormSelect>
    );
}

export default MultiFormSelect;
