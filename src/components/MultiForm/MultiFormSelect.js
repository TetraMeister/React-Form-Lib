import React from 'react';
import StyledMultiFormSelect from './MultiFormSelect.styled';

function MultiFormSelect(props) {
    const { $options, children } = props;

    return (
        <StyledMultiFormSelect>
            <h4>{children}</h4>
            {$options?.map((option) => (
                <li key={option}>{option}</li>
            ))}
        </StyledMultiFormSelect>
    );
}

export default MultiFormSelect;
