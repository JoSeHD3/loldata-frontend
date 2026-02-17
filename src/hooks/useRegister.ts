import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
    return useMutation({
        mutationFn: async (data: {
            email: string;
            password: string;
            confirmPassword: string;
        }) => {
            const res = await fetch(`/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Registration Failed');

            return res.json();
        },
    });
};
