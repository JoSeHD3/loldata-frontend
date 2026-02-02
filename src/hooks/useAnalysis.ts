import { useQuery } from '@tanstack/react-query';
import { AnalysisResponse } from '../types/analysis';

type UseAnalysisParams = {
    gameName: string;
    tag: string;
};

export const useAnalysis = (params: UseAnalysisParams) => {
    const { data, isLoading, isError } = useQuery<AnalysisResponse>({
        queryKey: ['analysis', params],
        queryFn: () => getAnalysisData(params),
        enabled: Boolean(params.gameName && params.tag),
        staleTime: 1000 * 60 * 5,
    });

    return { data, isLoading, isError };
};

const getAnalysisData = async (
    params: UseAnalysisParams
): Promise<AnalysisResponse> => {
    const searchParams = new URLSearchParams({
        gameName: params.gameName,
        tag: params.tag,
    });

    const res = await fetch(`/api/analysis?${searchParams}`);

    if (!res.ok) throw new Error('Failed to fetch analysis');

    return res.json();
};
