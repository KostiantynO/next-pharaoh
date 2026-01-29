'use client';

import { MainMenu } from './MainMenu';

const NileShimmer = () => (
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.2),transparent_60%)] opacity-20" />
);

const DecorAbsoluteGradient = () => (
  <>
    <NileShimmer />
  </>
);

const Hero = () => (
  <div className="absolute top-24 w-full text-center">
    <h1 className="text-7xl font-extrabold tracking-wide text-yellow-200 drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
      😺🌊✨ Welcome to PharaOwO ✨🌊😺
    </h1>

    <h2>Cat-approved. Nile-blessed. Pyramid-certified.</h2>

    <p className="mt-4 text-lg italic text-yellow-100/80">
      an egyptian city builder with catgirls :D
    </p>
  </div>
);

const Menu = () => (
  <div className="absolute right-[10%] top-1/2 flex w-full -translate-y-1/2 flex-col items-center gap-4">
    <MainMenu />
  </div>
);

const Footer = () => (
  <div className="absolute bottom-6 w-full text-center text-xs text-yellow-100/40">
    catgirls are combing their lokons • nile water is flowing • light wind brings sand
    dust into the city...
  </div>
);

export const MainMenuScreen = () => {
  // TODO: Add useLoader - r3f/drei

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-amber-900 via-orange-800 to-indigo-950">
      <DecorAbsoluteGradient />

      <Hero />

      <Menu />

      <Footer />
    </div>
  );
};
