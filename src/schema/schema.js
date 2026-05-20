import { z } from 'zod';

const schema = z.object({
    firstName: z.string().min(1, 'Imię jest wymagane'),
    lastName: z.string().min(1, 'Nazwisko jest wymagane'),
    email: z.string().email('Nieprawidłowy email'),
    password: z.string().min(8, 'Hasło musi mieć minimum 8 znaków'),

    country: z.enum(['Polska', 'Niemcy', 'Francja', 'Włochy'], { message: 'Wybierz kraj' }),
    city: z.string().min(1, 'Miasto jest wymagane'),
    street: z.string().min(1, 'Ulica jest wymagana'),

    experience: z.enum(['Junior', 'Mid', 'Senior'], { message: 'Wybierz poziom doświadczenia' }),
    skills: z
        .array(z.enum(['React', 'TypeScript', 'Node.js', 'GraphQL']))
        .min(1, 'Wybierz przynajmniej jedną umiejętność'),
});

export default schema;
