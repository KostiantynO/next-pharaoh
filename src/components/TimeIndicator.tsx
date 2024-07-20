'use client';

import { useSelectTime } from '@/stores/selectors';

export const TimeIndicator = () => {
  const time = useSelectTime();

  return <span>{time}</span>;
};
