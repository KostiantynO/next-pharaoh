// src\app\page.tsx
import { memo } from 'react';

import { CanvasContent } from '@/components/CanvasContent';
import { GameCanvas } from '@/components/GameCanvas';
import { NavBar } from '@/components/ui/NavBar';
import { Sidebar } from '@/components/ui/Sidebar';
import { SidebarContent } from '@/components/ui/SidebarContent';

import type { ReactNode } from 'react';

const CanvasMemo = () => (
  <GameCanvas>
    <CanvasContent />
  </GameCanvas>
);

const Canvas = memo(CanvasMemo);
Canvas.displayName = 'Canvas';

const GamePageMemo = ({ children }: { children: ReactNode }) => {
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

const GamePage = memo(GamePageMemo);
GamePage.displayName = 'GamePage';

const GameMemo = () => (
  <GamePage>
    <Canvas />
  </GamePage>
);

const Game = memo(GameMemo);
Game.displayName = 'Game';

export default Game;
