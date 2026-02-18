'use client';

import clsx from 'clsx';
import { BadgeAlert, BadgeCheck, BadgeMinus, LucideIcon } from 'lucide-react';
import { toast as sonnerToast } from 'sonner';

const toast = (toast: Omit<ToastProps, 'id'>) => {
    return sonnerToast.custom(id => (
        <Toast
            id={id}
            title={toast.title}
            description={toast.description}
            color={toast.color}
        />
    ));
};

const Toast = (props: ToastProps) => {
    const { title, description, color } = props;
    const variant = toastVariants[color];
    const Icon = variant.icon || null;

    return (
        <div
            className={clsx(
                'flex w-full items-center rounded-lg p-4 shadow-lg ring-1 ring-black/5 md:max-w-91',
                variant.bg
            )}
        >
            <div className="flex flex-1 items-center">
                <div className="w-full">
                    <p className={clsx('text-sm font-medium', variant.text)}>
                        {title}
                    </p>
                    <p className={clsx('mt-1 text-sm', variant.subtext)}>
                        {description}
                    </p>
                </div>
            </div>
            {Icon && (
                <Icon
                    className={clsx('mr-2 ml-5 h-5 w-5', variant.iconColor)}
                />
            )}
        </div>
    );
};

const toastVariants: Record<
    ToastProps['color'],
    {
        bg: string;
        iconColor: string;
        text: string;
        subtext: string;
        icon?: LucideIcon;
    }
> = {
    warning: {
        bg: 'bg-yellow-500',
        iconColor: 'text-yellow-200',
        text: 'text-gray-900',
        subtext: 'text-gray-500',
        icon: BadgeAlert,
    },
    error: {
        bg: 'bg-red-500',
        iconColor: 'text-red-200',
        text: 'text-gray-900',
        subtext: 'text-gray-300',
        icon: BadgeMinus,
    },
    success: {
        bg: 'bg-green-500',
        iconColor: 'text-green-200',
        text: 'text-gray-900',
        subtext: 'text-gray-600',
        icon: BadgeCheck,
    },
    normal: {
        bg: 'bg-gray-900',
        iconColor: 'text-gray-200',
        text: 'text-gray-300',
        subtext: 'text-gray-500',
    },
};

interface ToastProps {
    id: string | number;
    title: string;
    description: string;
    color: 'warning' | 'error' | 'success' | 'normal';
}

export { toast };
