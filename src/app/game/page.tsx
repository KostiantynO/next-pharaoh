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
Canvas.displayName = 'Canvas';

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
HomePage.displayName = 'HomePage';

const HomeMemo = () => (
  <HomePage>
    <Canvas />
  </HomePage>
);

const Home = memo(HomeMemo);
Home.displayName = 'Home';

export default Home;
