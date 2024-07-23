import { useThree } from '@react-three/fiber';
import { useCallback, useEffect } from 'react';

import { useSelectAngle, useSelectRotateCamera } from '@/stores/selectors';

export const FixedAngleCamera = () => {
  const { camera } = useThree();
  const rotateCamera = useSelectRotateCamera();
  const angle = useSelectAngle();

  const onKeydownRotate = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === 'ArrowLeft') {
        rotateCamera((angle + 270) % 360);
      } else if (key === 'ArrowRight') {
        rotateCamera((angle + 90) % 360);
      }
    },
    [angle, rotateCamera]
  );

  useEffect(() => {
    if (!camera) return;
    camera.rotation.set(0, (angle * Math.PI) / 180, 0);
  }, [angle, camera]);

  useEffect(() => {
    window.addEventListener('keydown', onKeydownRotate, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKeydownRotate);
    };
  }, [onKeydownRotate]);

  return null;
};
