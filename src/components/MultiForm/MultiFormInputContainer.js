import React from 'react';

import StyledMultiFormInputContainer from './MultiFormInputContainer.styled';

function MultiFormInputContainer({ $type, $label, children, id }) {
    return $label ? (
        <StyledMultiFormInputContainer $type={$type}>
            <label htmlFor={id}>{$label}</label>
            {children}
        </StyledMultiFormInputContainer>
    ) : (
        children
    );
}

export default MultiFormInputContainer;
