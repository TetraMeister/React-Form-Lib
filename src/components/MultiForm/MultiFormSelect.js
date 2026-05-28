import React, { useId, useState } from 'react';
import StyledMultiFormSelect from './MultiFormSelect.styled';
import StyledMultiFormError from './MultiFormError.styled';
import { useMultiForm } from '../../hooks/useMultiForm';

function MultiFormSelect({ $options, children, $name }) {
    const { setValue, register, displayValues, setDisplayValue, errors } = useMultiForm();
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
        <StyledMultiFormSelect $isOpen={isOpen}>
            <div className="select__container">
                <input type="hidden" {...register($name)} />
                <div className="select__input-container">
                    <label htmlFor={id}>{children}</label>
                    <input
                        id={id}
                        type="text"
                        readOnly
                        value={displayValue}
                        placeholder="Select..."
                        onClick={handleIsOpen}
                    />
                </div>
                {isOpen && (
                    <div className="select__options">
                        {$options?.map((option) => (
                            <button type="button" key={option} onClick={() => handleValueChange(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {errors?.[$name] && <StyledMultiFormError>{errors[$name].message}</StyledMultiFormError>}
        </StyledMultiFormSelect>
    );
}

export default MultiFormSelect;
