import { RightBar } from '@/components/RightBar';
import { Sidebar } from '@/components/Sidebar';
import React from 'react';

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={'container'}>
      <div className="pt-20px df jcsb">
        <Sidebar />
        <div className="content">{children}</div>
        <RightBar />
      </div>
    </div>
  );
};
