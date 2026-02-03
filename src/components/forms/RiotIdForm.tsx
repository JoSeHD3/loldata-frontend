'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RiotIdForm = () => {
    const router = useRouter();

    const [gameName, setGameName] = useState<string>('');
    const [tag, setTag] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        router.push(
            `/analysis?gameName=${encodeURIComponent(gameName)}&tag=${encodeURIComponent(tag)}`
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Nickname"
                value={gameName}
                onChange={e => setGameName(e.target.value)}
            />
            <input
                placeholder="Tag"
                value={tag}
                onChange={e => setTag(e.target.value)}
            />
            <button type="submit">Analyze</button>
        </form>
    );
};

export { RiotIdForm };
