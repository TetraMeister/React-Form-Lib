import React, { useId } from 'react';
import StyledMultiFormInput from './MultiFormInput.styled';
import MultiFormInputContainer from './MultiFormInputContainer';
import { useMultiForm } from '../../hooks/useMultiForm';

function MultiFormInput(props) {
    const { $type, $name, $value, $label } = props;

    const { register } = useMultiForm();

    const id = useId();

    const value = () => {
        if ($value) {
            return $value;
        }
        if ($type === 'submit') {
            return 'Submit';
        }
        return undefined;
    };

    return (
        <MultiFormInputContainer $label={$label} $type={$type}>
            <StyledMultiFormInput
                id={id}
                type={$type}
                name={$name}
                value={value()}
                placeholder={$name}
                $label={$label}
                {...($type !== 'submit' ? register($name) : {})}
            />
        </MultiFormInputContainer>
    );
}

export default MultiFormInput;
