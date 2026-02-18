import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLogin = (options?: {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: { email: string; password: string }) => {
            const res = await fetch(`/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(data),
            });

            const responseData = await res.json();

            if (!res.ok)
                throw new Error(responseData.message || 'Invalid credentials');

            return responseData;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['me'] });
            options?.onSuccess?.();
        },
        onError: error => {
            options?.onError?.(error as Error);
        },
    });
};
