import { useQuery } from '@tanstack/react-query';
import { AnalysisResponse } from '@/types/analysis';

type RiotId = {
    gameName: string;
    tag: string;
};

export const useAnalysis = ({ gameName, tag }: RiotId) => {
    const { data, isLoading, isError } = useQuery<AnalysisResponse>({
        queryKey: ['analysis', { gameName, tag }],
        queryFn: () => getAnalysisData({ gameName, tag }),
        enabled: Boolean(gameName && tag),
        staleTime: 1000 * 60 * 5,
    });

    return { data, isLoading, isError };
};

const getAnalysisData = async ({
    gameName,
    tag,
}: RiotId): Promise<AnalysisResponse> => {
    const searchParams = new URLSearchParams({
        gameName,
        tag,
    });

    const res = await fetch(`/api/analysis?${searchParams}`);

    if (!res.ok) throw new Error('Failed to fetch analysis');

    return res.json();
};
