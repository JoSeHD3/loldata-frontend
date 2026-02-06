import { RegisterForm } from '@/components/forms/RegisterForm';

const RegisterPage = () => {
    return (
        <div className="flex min-h-screen items-center">
            <div className="flex w-full flex-col items-center justify-center">
                <span className="p-4 text-4xl">Register</span>
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;
