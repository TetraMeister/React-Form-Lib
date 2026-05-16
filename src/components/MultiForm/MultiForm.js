import React from 'react';
import StyledMultiForm from './MultiForm.styled';
import MultiFormTitle from './MultiFormTitle';

function MultiForm(props) {
    const { $title, $width, children } = props;

    return (
        <StyledMultiForm $width={$width}>
            <MultiFormTitle $width={$width}>{$title}</MultiFormTitle>
            {children}
        </StyledMultiForm>
    );
}

export default MultiForm;
