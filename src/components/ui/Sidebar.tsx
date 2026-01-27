'use client';
import { useSelectDataForSidebar } from '@/stores/selectors';

import type { ReactNode } from 'react';

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isSidebarOpen } = useSelectDataForSidebar();

  return (
    <aside
      className={`absolute bottom-0 right-0 top-6 isolate flex flex-col gap-4 overflow-hidden bg-yellow-600 px-2 py-1 contain-strict ${isSidebarOpen ? `w-72` : `w-20`}`}
    >
      {children}
    </aside>
  );
};
