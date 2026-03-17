import { Card } from '@/components/ui/Card';

const Dashboard = () => {
    return (
        <div className="bg-main flex h-screen w-full text-white">
            {/* sidebar space */}
            <div className="w-64 shrink-0" />

            <main className="flex-1 overflow-y-auto p-10">
                <div className="mx-auto max-w-7xl space-y-8">
                    <div className="flex flex-wrap place-content-end gap-4">
                        {[
                            'Aggression',
                            'Farming',
                            'Vision',
                            'Dashboard',
                            'Map Impact',
                            'Survivability',
                            'Objectives',
                        ].map(tab => (
                            <button
                                key={tab}
                                className="bg-sub1 hover:bg-sub2/40 text-sub4 rounded-full px-6 py-2 text-sm"
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-8">
                        <div className="bg-sub1 h-82 min-w-md flex-1 rounded-2xl" />

                        <div className="bg-sub1 h-82 min-w-md flex-1 rounded-2xl" />
                    </div>
                    <div className="flex flex-wrap gap-8">
                        <div className="flex flex-1 flex-wrap gap-8">
                            <Card
                                cardName={'AVERAGE GOLD PER MINUTE'}
                                context={'357.25'}
                                layoutColor={'#0e6ba8'}
                                trend={'positive'}
                            />

                            <Card
                                cardName={'AVERAGE CS PER MINUTE'}
                                context={'8.2'}
                                layoutColor={'#0e6ba8'}
                                trend={'positive'}
                            />

                            <Card
                                cardName={'AVERAGE DAMAGE DONE TO PLAYERS'}
                                context={'25773'}
                                layoutColor={'#0e6ba8'}
                                trend={'negative'}
                            />
                        </div>
                        <div className="bg-sub1 h-82 min-w-md flex-2 rounded-2xl" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export { Dashboard };
