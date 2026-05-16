import React from 'react';

import StyledMultiFormInput from './MultiFormInput.styled';

function MultiFormInput(props) {
    const { $type, $name } = props;

    return (
        <StyledMultiFormInput
            type={$type}
            name={$name}
            value={$type === 'submit' ? 'Submit' : undefined}
            placeholder={$name}
        />
    );
}

export default MultiFormInput;
