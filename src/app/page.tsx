import { GameCanvas } from '@/components/GameCanvas';
import { NavBar } from '@/components/NavBar';

const Home = () => {
  return (
    <main className="relative h-full">
      <NavBar />
      <GameCanvas />
    </main>
  );
};

export default Home;
