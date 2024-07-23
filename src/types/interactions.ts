import type { MouseEvent } from 'react';

export interface ClickOnCanvas
  extends MouseEvent<HTMLDivElement, globalThis.MouseEvent> {}
