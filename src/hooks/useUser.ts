import { useQuery } from '@tanstack/react-query';

export type User = {
    id: string;
    email: string;
    role: 'user' | 'sub';
};

export const useUser = () => {
    const {
        data: user,
        isLoading,
        isError,
    } = useQuery<User>({
        queryKey: ['me'],
        queryFn: () => getUser(),
        retry: false,
    });

    return { user, isLoading, isError };
};

const getUser = async (): Promise<User> => {
    const res = await fetch(`/api/auth/me`, { credentials: 'include' });

    if (!res.ok) throw new Error('Not authenticated');

    return res.json();
};
