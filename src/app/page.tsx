// src\app\page.tsx
import { memo } from 'react';

import { CanvasContent } from '@/components/CanvasContent';
import { GameCanvas } from '@/components/GameCanvas';
import { NavBar } from '@/components/ui/NavBar';
import { Sidebar } from '@/components/ui/Sidebar';
import { SidebarContent } from '@/components/ui/SidebarContent';

import type { ReactNode } from 'react';

const CanvasMemo = () => {
  return (
    <GameCanvas>
      <CanvasContent />
    </GameCanvas>
  );
};

const Canvas = memo(CanvasMemo);

const HomePageMemo = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative flex h-full flex-col">
      <NavBar />
      {children}
      <Sidebar>
        <SidebarContent />
      </Sidebar>
    </main>
  );
};

const HomePage = memo(HomePageMemo);

const HomeMemo = () => (
  <HomePage>
    <Canvas />
  </HomePage>
);

const Home = memo(HomeMemo);

export default Home;
