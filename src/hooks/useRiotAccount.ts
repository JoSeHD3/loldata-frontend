import { RiotAccount } from '@/types/riotAccount';
import { useQuery } from '@tanstack/react-query';

const useRiotAccount = () => {
    const {
        data: riotAccount,
        isLoading,
        isError,
    } = useQuery<RiotAccount[]>({
        queryKey: ['riotAccount'],
        queryFn: getRiotAccount,
        staleTime: 1000 * 60 * 5,
    });

    return { riotAccount, isLoading, isError };
};

const getRiotAccount = async (): Promise<RiotAccount[]> => {
    const res = await fetch('/api/riot-account', { credentials: 'include' });

    if (!res.ok) throw new Error('Failed to fetch riot account');

    return res.json();
};

export { useRiotAccount };
