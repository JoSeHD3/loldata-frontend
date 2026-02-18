import { useMutation } from '@tanstack/react-query';

export const useRegister = (options?: {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}) => {
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

            const responseData = await res.json();

            if (!res.ok)
                throw new Error(responseData.message || 'Registration Failed');

            return responseData;
        },
        ...options,
    });
};
