import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledMultiFormInput from './MultiFormInput.styled';
import MultiFormInputContainer from './MultiFormInputContainer';

function MultiFormInput(props) {
    const { $type, $name, $value, $label } = props;

    const id = uuidv4();

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
            <label htmlFor={id}>{$label}</label>
            <StyledMultiFormInput
                id={id}
                type={$type}
                name={$name}
                value={value()}
                placeholder={$name}
                $label={$label}
            />
        </MultiFormInputContainer>
    );
}

export default MultiFormInput;
