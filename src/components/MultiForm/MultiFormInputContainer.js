import React from 'react';

import StyledMultiFormInputContainer from './MultiFormInputContainer.styled';

function MultiFormInputContainer({ $type, $label, children, id }) {
    return (
        <StyledMultiFormInputContainer $type={$type}>
            {$label && <label htmlFor={id}>{$label}</label>}
            {children}
        </StyledMultiFormInputContainer>
    );
}

export default MultiFormInputContainer;
