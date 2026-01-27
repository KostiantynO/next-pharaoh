// src\types\menu.ts
export type MenuActionId = 'startNewGame' | 'loadGame' | 'openSettings' | 'exit';

export type MenuButtonsType = [menuActionId: MenuActionId, label: string, icon: string][];
