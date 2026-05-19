import { z } from 'zod';

const schema = z.object({
    test: z.enum(['Warta1', 'Wisła1', 'Wełna1'], { message: 'Please select an option' }),
    Name2: z.string().min(1, 'Name2 is required'),
    Rower2: z.enum(['rower', 'motor'], { message: 'Please select an option' }),
});

export default schema;
