'use client';

import { LoginFormData, loginSchema } from '@/schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLogin } from '@/hooks/useLogin';
import { toast } from '@/components/ui/Toast';

const LoginForm = () => {
    const login = useLogin({
        onSuccess: () => {
            console.log('user logged in');
        },
        onError: error => {
            toast({
                title: 'Login failed',
                description: error.message,
                color: 'error',
            });
        },
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

    const onSubmit = (data: LoginFormData) => {
        console.log(`User data: ${data}`);
        login.mutate(data);
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
            <Button type="submit" disabled={login.isPending}>
                {login.isPending ? 'Logging in...' : 'Login'}
            </Button>
        </form>
    );
};

export { LoginForm };
