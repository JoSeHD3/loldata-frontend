import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: { email: string; password: string }) => {
            const res = await fetch(`/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Invalid credentials');

            return res.json();
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['me'] }),
    });
};
