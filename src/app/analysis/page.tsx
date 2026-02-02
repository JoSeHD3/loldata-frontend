'use client';

import { useAnalysis } from '@/hooks/useAnalysis';
import { useSearchParams } from 'next/navigation';

const AnalysisPage = () => {
    const searchParams = useSearchParams();

    const gameName = searchParams.get('gameName') ?? '';
    const tag = searchParams.get('tag') ?? '';

    const { data, isLoading, isError } = useAnalysis({ gameName, tag });

    if (isLoading) return <p>Loading analysis...</p>;
    if (isError) return <p>Something went wrong</p>;
    if (!data) return null;

    return (
        <div>
            <h1>
                {gameName}#{tag}
            </h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default AnalysisPage;
