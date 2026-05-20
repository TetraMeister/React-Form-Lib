import React, { useId } from 'react';
import StyledMultiFormInput from './MultiFormInput.styled';
import MultiFormInputContainer from './MultiFormInputContainer';
import { useMultiForm } from '../../hooks/useMultiForm';

function MultiFormInput({ $type, $name, $value, $label, $noRegister }) {
    const { register, errors } = useMultiForm();

    const id = useId();

    const value = () => {
        if (($value && $type === 'radio') || ($value && $type === 'checkbox')) {
            return $value;
        }
        if ($type === 'submit') {
            return 'Submit';
        }
        return undefined;
    };

    return (
        <MultiFormInputContainer $label={$label} $type={$type} id={id}>
            <StyledMultiFormInput
                id={id}
                type={$type}
                name={$name}
                value={value()}
                placeholder={!$label && $name}
                $label={$label}
                {...($type !== 'submit' && !$noRegister ? register($name) : {})}
            />
            {errors?.[$name] && $type !== 'radio' && errors?.[$name] && $type !== 'checkbox' && (
                <span>{errors[$name].message}</span>
            )}
        </MultiFormInputContainer>
    );
}

export default MultiFormInput;
