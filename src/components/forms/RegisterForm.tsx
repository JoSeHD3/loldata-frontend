'use client';

import { RegisterFormData, registerSchema } from '@/schemas/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRegister } from '@/hooks/useRegister';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/Toast';

const RegisterForm = () => {
    const router = useRouter();
    const registerHook = useRegister({
        onSuccess: () => {
            router.push('/login');
            console.log('user registered');
        },
        onError: error => {
            toast({
                title: 'Registration failed',
                description: error.message,
                color: 'error',
            });
        },
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

    const onSubmit = (data: RegisterFormData) => {
        console.log('Register DATA', data);
        registerHook.mutate(data);
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
            <div>
                <Input
                    type="password"
                    placeholder="Confirm password"
                    {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                    <p className="mt-1 text-xs text-red-400">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>
            <Button type="submit" disabled={registerHook.isPending}>
                {registerHook.isPending ? 'Registering...' : 'Register'}
            </Button>
        </form>
    );
};

export { RegisterForm };
