import React from 'react';
import MultiFormGroup from './MultiFormGroup';

function MultiFormSelect(props) {
    const { $options, children } = props;

    return (
        <MultiFormGroup $options={$options} $type="radio" $name={children} $variant="select">
            {children}
        </MultiFormGroup>
    );
}

export default MultiFormSelect;
