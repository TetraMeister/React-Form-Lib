import React from 'react';

import StyledMultiFormInputContainer from './MultiFormInputContainer.styled';

function MultiFormInputContainer(props) {
    const { $type, $label, children } = props;

    return $label ? <StyledMultiFormInputContainer $type={$type}>{children}</StyledMultiFormInputContainer> : children;
}

export default MultiFormInputContainer;
