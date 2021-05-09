import React, { ReactNode } from 'react';
import { Container, NavBar, SideBar } from '..';

interface SideBarLayoutProps {
  children: ReactNode | ReactNode;
  sectionTitle?: string;
}

export const SideBarLayout: React.FC<SideBarLayoutProps> = ({
  children,
  sectionTitle,
}) => {
  return (
    <div className='flex overflow-hidden md:h-screen bg-gray-50 dark:bg-gray-900'>
      <SideBar />
      <div className='flex flex-col flex-1'>
        <NavBar />
        <Container sectionTitle={sectionTitle}>{children}</Container>
      </div>
    </div>
  );
};
