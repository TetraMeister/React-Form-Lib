import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import MultiForm from './MultiForm';
import MultiFormSection from './MultiForm/MultiFormSection';
import MultiFormInput from './MultiForm/MultiFormInput';
import MultiFormSelect from './MultiForm/MultiFormSelect';

function App() {
    return (
        <>
            <GlobalStyle />
            <MultiForm $width="300px" $title="Hello World">
                <MultiFormSection>
                    <MultiFormInput $type="text" $name="Name" $label="Write Your name" />
                    <MultiFormInput $type="radio" $name="Rower" $value="rower" $label="Rower" />
                    <MultiFormInput $type="radio" $name="Rower" $value="motor" $label="Motor" />
                    <MultiFormSelect $options={['Warta', 'Wisła', 'Wełna']}>Wybierz rzekę</MultiFormSelect>
                    <MultiFormInput $type="submit" $name="Submit" />
                </MultiFormSection>
            </MultiForm>
        </>
    );
}

export default App;
