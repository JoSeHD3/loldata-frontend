'use client';

import { LoginFormData, loginSchema } from '@/schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

    const onSubmit = async (data: LoginFormData) => {
        console.log('LOGIN DATA', data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-full max-w-sm flex-col gap-4"
        >
            <div>
                <Input
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                />
                {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div>
                <Input
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                />
                {errors.password && (
                    <p className="mt-1 text-xs text-red-400">
                        {errors.password.message}
                    </p>
                )}
            </div>
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
            </Button>
        </form>
    );
};

export { LoginForm };
