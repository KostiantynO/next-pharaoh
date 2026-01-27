'use client';

import { useEffect } from 'react';

import { MainMenu } from './MainMenu';

export const MainMenuScreen = () => {
  // TODO: replace with useLoader for resource handling or recommended r3f/drei approach
  useEffect(() => {
    // preload heavy assets quietly in background
    // warm GPU, fetch textures, hydrate caches
    console.log('🐈 Preloading dynasty assets...');
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-amber-900 via-orange-800 to-indigo-950">
      {/* Nile shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.2),transparent_60%)] opacity-20" />

      {/* Title */}
      <div className="absolute top-24 w-full text-center">
        <h1 className="text-7xl font-extrabold tracking-wide text-yellow-200 drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
          😺🌊✨ Welcome to PharaOwO ✨🌊😺
        </h1>

        <h2>Cat-approved. Nile-blessed. Pyramid-certified.</h2>

        <p className="mt-4 text-lg italic text-yellow-100/80">
          an ancient city builder with adorable cute catgirls :D
        </p>
      </div>

      {/* Menu */}
      <div className="absolute bottom-32 flex w-full flex-col items-center gap-4">
        <MainMenu />
      </div>

      {/* Footer fluff */}
      <div className="absolute bottom-6 w-full text-center text-xs text-yellow-100/40">
        catsgirls are combing their lokons • nile water is flowing • light wind brings
        sand dust into the city...
      </div>
    </div>
  );
};
