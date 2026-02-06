import { LoginForm } from '@/components/forms/LoginForm';

const LoginPage = () => {
    return (
        <div className="flex min-h-screen items-center">
            <div className="flex w-full flex-col items-center justify-center">
                <span className="p-4 text-4xl">Login</span>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
