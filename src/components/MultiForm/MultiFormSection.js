import React from 'react';

import StyledMultiFormSection from './MultiFormSection.styled';

function MultiFormSection(props) {
    const { children, $nr } = props;

    return <StyledMultiFormSection $nr={$nr}>{children}</StyledMultiFormSection>;
}

export default MultiFormSection;
