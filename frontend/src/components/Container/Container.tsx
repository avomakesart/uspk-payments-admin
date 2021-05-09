import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode | ReactNode;
  sectionTitle?: string;
  ref?: any;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  sectionTitle,
  ref,
}) => {
  return (
    <main className='h-screen pb-16 overflow-y-auto'>
      <div
        className='container px-6 mx-auto grid 2xl:max-w-screen-xl'
        ref={ref}
      >
        {sectionTitle && (
          <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
            {sectionTitle}
          </h2>
        )}
        {children}
      </div>
    </main>
  );
};
