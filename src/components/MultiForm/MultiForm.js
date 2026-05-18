import React from 'react';
import StyledMultiForm from './MultiForm.styled';
import MultiFormTitle from './MultiFormTitle';

import { MultiFormProvider } from '../../hooks/useMultiForm';

function MultiForm(props) {
    const { $title, $width, children } = props;

    return (
        <MultiFormProvider>
            <StyledMultiForm $width={$width}>
                <MultiFormTitle $width={$width}>{$title}</MultiFormTitle>
                {children}
            </StyledMultiForm>
        </MultiFormProvider>
    );
}

export default MultiForm;
