import { Header } from '@/components/Header';
import { RightBar } from '@/components/RightBar';
import { Sidebar } from '@/components/Sidebar';
import React from 'react';

interface MainLayoutProps {
  children?: React.ReactNode;
  fullWidth?: boolean;
  hideLeft?: boolean;
  hideRight?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hideLeft,
  hideRight,
  fullWidth,
}) => {
  return (
    <>
      <Header />
      <div className="df jcc px-10px">
        {!hideLeft && <Sidebar />}
        <div className="flex">
          {!fullWidth ? (
            <div
              className="content px-20px maxw-650px flex"
              style={{ margin: '0 auto' }}
            >
              {children}
            </div>
          ) : (
            <div
              className="content px-20px maxw-900px flex"
              style={{ margin: '0 auto', padding: '0 20px' }}
            >
              {children}
            </div>
          )}
        </div>
        {!hideRight && <RightBar />}
      </div>
    </>
  );
};
