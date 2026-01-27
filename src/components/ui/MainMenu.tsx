// src\components\ui\MainMenu.tsx
import { memo } from 'react';

import { useSelectMenuButtonAction } from '@/stores/selectors';

import type { MenuActionId, MenuButtonsType } from '@/types/menu';

const buttons: MenuButtonsType = [
  ['startNewGame', 'Establish Meowdynasty', '🐾'],
  ['loadGame', 'Load Dynasty', '📜'],
  ['openSettings', 'Temple Settings', '⚙️'],
  ['exit', 'Exit Game', '🚪'],
];

interface MainMenuButtonProps {
  menuActionId: MenuActionId;
  label: string;
  icon: string;
}

const MainMenuButton = ({ menuActionId, label, icon }: MainMenuButtonProps) => {
  const onMenuButtonClick = useSelectMenuButtonAction(menuActionId);
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
    <ul className="flex flex-col gap-4">
      {buttons.map(([menuActionId, icon, label], id) => (
        <li key={id}>
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
