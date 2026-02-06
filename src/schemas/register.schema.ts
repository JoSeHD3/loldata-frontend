import z from 'zod';

export const registerSchema = z
    .object({
        email: z.string().pipe(z.email('Invalid email address')),
        password: z.string().min(6, 'Password too short'),
        confirmPassword: z.string(),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

export type RegisterFormData = z.infer<typeof registerSchema>;
