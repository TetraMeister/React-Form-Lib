import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledMultiFormSelect from './MultiFormSelect.styled';

function MultiFormSelect(props) {
    const { $options, children } = props;

    return (
        <StyledMultiFormSelect>
            <h4>{children}</h4>
            {$options?.map((option) => (
                <li key={uuidv4()}>{option}</li>
            ))}
        </StyledMultiFormSelect>
    );
}

export default MultiFormSelect;
