import React, { useId } from 'react';
import {
    StyledMultiFormInputCheck,
    StyledMultiFormInputText,
    StyledMultiFormInputSubmit,
} from './MultiFormInput.styled';
import StyledMultiFormError from './MultiFormError.styled';
import MultiFormInputContainer from './MultiFormInputContainer';
import { useMultiForm } from '../../hooks/useMultiForm';

function MultiFormInput({ $type, $name, $value, $label, $noRegister }) {
    const { register, errors } = useMultiForm();
    const id = useId();

    const registerProps = !$noRegister && $name ? register($name) : {};

    return (
        <MultiFormInputContainer $label={$label} $type={$type} id={id}>
            {$type === 'submit' && (
                <StyledMultiFormInputSubmit
                    id={id}
                    name={$name}
                    value="Submit"
                    $label={$label}
                    readOnly
                    type="submit"
                />
            )}

            {($type === 'checkbox' || $type === 'radio') && (
                <StyledMultiFormInputCheck
                    id={id}
                    name={$name}
                    type={$type}
                    value={$value}
                    placeholder={!$label ? $name : null}
                    $label={$label}
                    {...registerProps}
                />
            )}

            {$type !== 'radio' && $type !== 'checkbox' && $type !== 'submit' && (
                <StyledMultiFormInputText
                    id={id}
                    type={$type}
                    name={$name}
                    placeholder={!$label ? $name : null}
                    $label={$label}
                    {...registerProps}
                />
            )}

            {errors?.[$name] && $type !== 'radio' && $type !== 'checkbox' && (
                <StyledMultiFormError>{errors[$name].message}</StyledMultiFormError>
            )}
        </MultiFormInputContainer>
    );
}

export default MultiFormInput;
