import React from 'react';

import StyledMultiFormInputContainer from './MultiFormInputContainer.styled';

function MultiFormInputContainer(props) {
    const { $type, $label, children, id } = props;

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
