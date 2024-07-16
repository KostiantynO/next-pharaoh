import { Inter } from 'next/font/google';

import { getStore } from '@/api/store';
import { StoreProvider } from '@/providers/StoreProvider';

import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const initialStore = await getStore();

  return (
    <html lang="en" className='h-full'>
      <body className={`h-full ${inter.className}`}>
        <StoreProvider initialStore={initialStore}>{children}</StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
