'use client';

import { HEX } from '@/types/colors';
import {
    Area,
    AreaChart,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

type ChartPoint = {
    gameIndex: number;
    value: number;
};

type Chart = {
    data: ChartPoint[];
    label: string;
    color: HEX;
    options?: string;
};

const LineStatChart = ({ data, label, color, options }: Chart) => {
    return (
        <div className={options}>
            <AreaChart
                style={{ width: '100%', maxWidth: '700px', height: '100%' }}
                responsive
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="gameIndex"
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    label={{
                        value: 'Game',
                        position: 'insideBottom',
                        fill: '#9CA3AF',
                    }}
                />
                <YAxis
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    label={{
                        value: label,
                        angle: -90,
                        position: 'insideLeft',
                        fill: '#9CA3AF',
                    }}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#111827',
                        border: 'none',
                    }}
                    labelStyle={{ color: '#9CA3AF' }}
                />
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke={color}
                    fill={`${color}90`}
                />
            </AreaChart>
        </div>
    );
};

export { LineStatChart };
