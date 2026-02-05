import z from 'zod';

export const riodIdSchema = z.object({
    gameName: z
        .string()
        .min(3, 'Nickname is too short.')
        .max(16, 'Nickname is too long.'),
    tag: z.string().min(2, 'Tag is too short.').max(5, 'Tag is too long.'),
});

export type RiotIdFormData = z.infer<typeof riodIdSchema>;
