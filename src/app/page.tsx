import { RiotIdForm } from '@/components/forms/RiotIdForm';
import { Card } from '@/components/ui/Card';
import { LineStatChart } from '@/components/ui/LineStatChart';

const Home = () => {
    return (
        <main>
            <p>Test</p>

            <RiotIdForm />

            <Card
                cardName={'Testowa karta'}
                context={'357.25'}
                layoutColor={'#6FC276'}
                trend={'negative'}
            />

            <LineStatChart
                data={[
                    { gameIndex: 1, value: 420 },
                    { gameIndex: 2, value: 435 },
                    { gameIndex: 3, value: 398 },
                    { gameIndex: 4, value: 312 },
                    { gameIndex: 5, value: 457 },
                    { gameIndex: 6, value: 411 },
                    { gameIndex: 7, value: 384 },
                    { gameIndex: 8, value: 512 },
                    { gameIndex: 9, value: 421 },
                    { gameIndex: 10, value: 322 },
                ]}
                label="Gold / min"
                color="#6FC276"
                options="h-64"
            />
        </main>
    );
};

export default Home;
