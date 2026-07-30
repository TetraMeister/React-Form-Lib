import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import MultiForm from './MultiForm';

import schema from '../schema/schema';

const mockupHolderStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
};

function App() {
    return (
        <section style={mockupHolderStyles}>
            <GlobalStyle />
            <MultiForm
                $title="Formularz aplikacji"
                $width="500px"
                $schema={schema}
                // eslint-disable-next-line
                $onSubmit={(data) => console.log(data)}
            >
                <MultiForm.Section $nr={1} $title="Logowanie">
                    <MultiForm.Input $type="text" $name="firstName" $label="Imię" />
                    <MultiForm.Input $type="text" $name="lastName" $label="Nazwisko" />
                    <MultiForm.Input $type="email" $name="email" />
                    <MultiForm.Input $type="password" $name="password" />
                </MultiForm.Section>

                <MultiForm.Section $nr={2} $title="Dane konta">
                    <MultiForm.Select $name="country" $options={['Polska', 'Niemcy', 'Francja', 'Włochy']}>
                        Kraj
                    </MultiForm.Select>
                    <MultiForm.Input $type="text" $name="city" $label="Miasto" />
                    <MultiForm.Input $type="text" $name="street" $label="Ulica" />
                </MultiForm.Section>

                <MultiForm.Section $nr={3} $title="Umiejętności">
                    <MultiForm.Group $type="radio" $name="experience" $options={['Junior', 'Mid', 'Senior']}>
                        Poziom doświadczenia
                    </MultiForm.Group>
                    <MultiForm.Group
                        $type="checkbox"
                        $name="skills"
                        $options={['React', 'TypeScript', 'Node.js', 'GraphQL']}
                    >
                        Umiejętności
                    </MultiForm.Group>
                </MultiForm.Section>
            </MultiForm>
        </section>
    );
}

export default App;
