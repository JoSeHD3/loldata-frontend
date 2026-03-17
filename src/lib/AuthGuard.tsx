import { useUser } from '@/hooks/useUser';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface AuthGuardProps {
    children: ReactNode;
    fallback?: ReactNode;
    loginPath?: string;
}

const AuthGuard = ({
    children,
    fallback = <div className="">Loading...</div>,
    loginPath = '/login',
}: AuthGuardProps) => {
    const { user, isLoading, isError } = useUser();
    const router = useRouter();
    const pathname = usePathname();

    const isAuthPage =
        pathname.startsWith(loginPath) || pathname.startsWith('/register');

    useEffect(() => {
        if (isAuthPage) return;

        if (isError || (!isLoading && !user)) {
            const searchParams = new URLSearchParams({ redirect: pathname });
            router.replace(`${loginPath}?${searchParams.toString()}`);
        }
    }, [isError, isLoading, user, pathname, router, isAuthPage, loginPath]);

    if (isLoading || !user) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
};

export { AuthGuard };
