import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import MultiForm from './MultiForm';
import MultiFormSection from './MultiForm/MultiFormSection';
import MultiFormInput from './MultiForm/MultiFormInput';

function App() {
    return (
        <>
            <GlobalStyle />
            <MultiForm $width="300px" $title="Hello World">
                <MultiFormSection>
                    <MultiFormInput $type="text" $name="Name" />
                    <MultiFormInput $type="submit" $name="Submit" />
                </MultiFormSection>
            </MultiForm>
        </>
    );
}

export default App;
