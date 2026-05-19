import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import MultiForm from './MultiForm';
import MultiFormSection from './MultiForm/MultiFormSection';
import MultiFormInput from './MultiForm/MultiFormInput';
import MultiFormSelect from './MultiForm/MultiFormSelect';

import schema from '../schema/schema';
import MultiFormGroup from './MultiForm/MultiFormGroup';

function App() {
    return (
        <>
            <GlobalStyle />
            <MultiForm $width="300px" $title="Hello World" $schema={schema} $onSubmit={(data) => console.log(data)}>
                <MultiFormSection>
                    <MultiFormGroup $options={['Warta1', 'Wisła1', 'Wełna1']} $type="radio" $name="test">
                        MultiGrupa
                    </MultiFormGroup>
                    <MultiFormInput $type="submit" />
                </MultiFormSection>
                <MultiFormSection>
                    <MultiFormInput $type="text" $name="Name2" $label="Write Your name" />
                    <MultiFormInput $type="radio" $name="Rower2" $value="rower" $label="Rower" />
                    <MultiFormInput $type="radio" $name="Rower2" $value="motor" $label="Motor" />
                    <MultiFormSelect $options={['Warta2', 'Wisła2', 'Wełna2']}>Wybierz rzekę</MultiFormSelect>
                    <MultiFormInput $type="submit" />
                </MultiFormSection>
            </MultiForm>
        </>
    );
}

export default App;
