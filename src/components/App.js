import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import MultiForm from './MultiForm';

import schema from '../schema/schema';

function App() {
    return (
        <>
            <GlobalStyle />
            <MultiForm
                $title="Formularz aplikacji"
                $width="500px"
                $schema={schema}
                // eslint-disable-next-line
                $onSubmit={(data) => console.log(data)}
            >
                <MultiForm.Section $nr={1}>
                    <MultiForm.Input $type="text" $name="firstName" $label="Imię" />
                    <MultiForm.Input $type="text" $name="lastName" $label="Nazwisko" />
                    <MultiForm.Input $type="email" $name="email" />
                    <MultiForm.Input $type="password" $name="password" />
                </MultiForm.Section>

                <MultiForm.Section $nr={2}>
                    <MultiForm.Select $name="country" $options={['Polska', 'Niemcy', 'Francja', 'Włochy']}>
                        Kraj
                    </MultiForm.Select>
                    <MultiForm.Input $type="text" $name="city" $label="Miasto" />
                    <MultiForm.Input $type="text" $name="street" $label="Ulica" />
                </MultiForm.Section>

                <MultiForm.Section $nr={3}>
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
        </>
    );
}

export default App;
