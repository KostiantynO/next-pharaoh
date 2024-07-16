'use client';
import { useSelectTime } from '@/providers/StoreProvider';

export const TimeIndicator = () => {
  const time = useSelectTime();

  return <span>{time}</span>;
};
