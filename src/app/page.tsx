// src\app\page.tsx
import { CanvasContent } from '@/components/CanvasContent';
import { GameCanvas } from '@/components/GameCanvas';
import { NavBar } from '@/components/NavBar';
import { Sidebar } from '@/components/Sidebar';
import { SidebarContent } from '@/components/SidebarContent';

const Home = () => {
  return (
    <main className="relative flex h-full flex-col">
      <NavBar />
      <GameCanvas>
        <CanvasContent />
      </GameCanvas>
      <Sidebar>
        <SidebarContent />
      </Sidebar>
    </main>
  );
};

export default Home;
