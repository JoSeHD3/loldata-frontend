'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { riodIdSchema, RiotIdFormData } from '@/schemas/riotId.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

const RiotIdForm = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RiotIdFormData>({
        resolver: zodResolver(riodIdSchema),
        mode: 'onSubmit',
    });

    const onSubmit = (data: RiotIdFormData) => {
        router.push(
            `/analysis?gameName=${encodeURIComponent(data.gameName)}&tag=${encodeURIComponent(data.tag)}`
        );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex max-w-sm flex-col gap-4"
        >
            <div>
                <Input
                    placeholder="Nickname"
                    {...register('gameName')}
                    className="m-4 w-64"
                />
                {errors.gameName && (
                    <p className="mt-1 text-xs text-red-400">
                        {errors.gameName.message}
                    </p>
                )}
            </div>
            <div>
                <Input
                    placeholder="Tag"
                    {...register('tag')}
                    className="m-4 mr-8 w-64"
                />
                {errors.tag && (
                    <p className="mt-1 text-xs text-red-400">
                        {errors.tag.message}
                    </p>
                )}
            </div>
            <Button type="submit" disabled={isSubmitting}>
                Analyze
            </Button>
        </form>
    );
};

export { RiotIdForm };
