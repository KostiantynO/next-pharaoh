'use client';
import { useSelectRotateCamera } from '@/providers/StoreProvider';

import { TimeIndicator } from './TimeIndicator';

export const NavBar = () => {
  const rotate = useSelectRotateCamera();

  const rotate0 = () => rotate(0);
  const rotate90 = () => rotate(90);
  const rotate180 = () => rotate(180);
  const rotate270 = () => rotate(270);

  return (
    <header className="flex h-6 justify-evenly">
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
