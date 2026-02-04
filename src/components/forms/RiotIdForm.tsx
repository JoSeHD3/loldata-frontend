'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

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
            <Input
                placeholder="Nickname"
                value={gameName}
                onChange={e => setGameName(e.target.value)}
                className="m-4 w-64"
            />
            <Input
                placeholder="Tag"
                value={tag}
                onChange={e => setTag(e.target.value)}
                className="m-4 mr-8 w-64"
            />
            <Button type="submit">Analyze</Button>
        </form>
    );
};

export { RiotIdForm };
