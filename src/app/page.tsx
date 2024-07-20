import { GameCanvas } from '@/components/GameCanvas';
import { NavBar } from '@/components/NavBar';
import { Sidebar } from '@/components/Sidebar';

const Home = () => {
  return (
    <main className="relative flex h-full flex-col">
      <NavBar />
      <GameCanvas />
      <Sidebar />
    </main>
  );
};

export default Home;
