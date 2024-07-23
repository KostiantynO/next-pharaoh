'use client';

import { useCallback } from 'react';

import { useSelectRotateCamera } from '@/stores/selectors';

import { TimeIndicator } from './TimeIndicator';

export const NavBar = () => {
  const rotate = useSelectRotateCamera();

  const rotate0 = useCallback(() => rotate(0), [rotate]);
  const rotate90 = useCallback(() => rotate(90), [rotate]);
  const rotate180 = useCallback(() => rotate(180), [rotate]);
  const rotate270 = useCallback(() => rotate(270), [rotate]);

  return (
    <header className="absolute left-0 right-0 top-0 flex h-6 justify-evenly">
      <p>
        Time: <TimeIndicator />
      </p>

      <div>
        <button type="button" onClick={rotate0} className="mx-2">
          0°
        </button>

        <button type="button" onClick={rotate90} className="mx-2">
          90°
        </button>

        <button type="button" onClick={rotate180} className="mx-2">
          180°
        </button>

        <button type="button" onClick={rotate270} className="mx-2">
          270°
        </button>
      </div>
    </header>
  );
};
