import { HEX } from '@/types/colors';
import clsx from 'clsx';
import { ReactNode } from 'react';

type CardParams = {
    cardName: string;
    context: ReactNode;
    layoutColor: HEX;
    trend?: 'positive' | 'negative';
};

const Card = ({ cardName, context, layoutColor, trend }: CardParams) => {
    const trendStyle = clsx(
        'mr-4 text-3xl font-semibold',
        trend === 'positive' ? 'text-green-300' : 'text-red-400'
    );
    const trendIcon = trend === 'positive' ? '▲' : '▼';

    return (
        <div
            className="relative w-100 rounded-l-sm rounded-r-xl bg-neutral-900 p-4 shadow-lg transition-transform duration-200 active:scale-[0.98]"
            style={{
                boxShadow: `0 0 20px ${layoutColor}30`,
            }}
        >
            <div
                className="absolute top-0 left-0 h-full w-1 rounded-l-xl"
                style={{ backgroundColor: layoutColor }}
            />

            <div className="flex items-center justify-between pl-3">
                <div>
                    <p className="text-xs tracking-wide text-gray-400 uppercase">
                        {cardName}
                    </p>

                    <p className="mt-1 text-3xl font-semibold text-white">
                        {context}
                    </p>
                </div>
                {trend && <p className={trendStyle}>{trendIcon}</p>}
            </div>
        </div>
    );
};

export { Card };
