import React from 'react';
import StyledMultiFormTitle from './MultiFormTitle.styled';

function MultiFormTitle(props) {
    const { children, $width } = props;

    return <StyledMultiFormTitle $width={$width}>{children}</StyledMultiFormTitle>;
}

export default MultiFormTitle;
