// src\components\ui\MainMenu.tsx
import { memo } from 'react';

import { useSelectMenuButtonAction } from '@/stores/selectors';

import type { MenuButtonsType } from '@/types/menu';

const buttons: MenuButtonsType[] = [
  { menuActionId: 'startNewGame', label: 'Establish Meowdynasty', icon: '🐾' },
  { menuActionId: 'loadGame', label: 'Load Dynasty', icon: '📜' },
  { menuActionId: 'openSettings', label: 'Temple Settings', icon: '⚙️' },
  { menuActionId: 'exit', label: 'Exit Game', icon: '🚪' },
];

const MainMenuButton = ({ menuActionId, label, icon }: MenuButtonsType) => {
  const onMenuButtonClick = useSelectMenuButtonAction(menuActionId);
  console.log(onMenuButtonClick);
  if (!onMenuButtonClick) return null;

  return (
    <button
      onClick={onMenuButtonClick}
      className="rounded-xl bg-yellow-300/90 px-10 py-3 text-lg font-semibold text-amber-900 shadow-lg transition hover:scale-105 hover:bg-yellow-200 active:scale-95"
    >
      {icon} {label}
    </button>
  );
};

const MainButtonsList = () => {
  return (
    <ul className="flex flex-col gap-4 space-y-4 rounded-xl bg-black/40 p-6 backdrop-blur-md">
      {buttons.map(({ menuActionId, label, icon }) => (
        <li key={menuActionId}>
          <MainMenuButton menuActionId={menuActionId} label={label} icon={icon} />
        </li>
      ))}
    </ul>
  );
};

const MainMenuMemo = () => {
  return <MainButtonsList />;
};

export const MainMenu = memo(MainMenuMemo);
MainMenu.displayName = 'MainMenu';
