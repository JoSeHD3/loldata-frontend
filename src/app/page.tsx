import { RiotIdForm } from '@/components/forms/RiotIdForm';
import { Card } from '@/components/forms/ui/Card';

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
        </main>
    );
};

export default Home;
