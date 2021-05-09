import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React, { ReactNode } from 'react';

interface LinkProps {
  path: string;
  title: string;
  icon?: ReactNode | ReactNode[];
}

export const Link: React.FC<LinkProps> = ({ icon, path, title }) => {
  const { pathname } = useRouter();

  return (
    <>
      {pathname === path && (
        <span
          className='absolute inset-y-0 left-0 w-1
                    bg-purple-600
                     rounded-tr-lg rounded-br-lg'
          aria-hidden='true'
        />
      )}
      <NextLink href={path}>
        <span
          className={`inline-flex items-center w-full text-sm font-semibold ${
            pathname === path && 'text-gray-800'
          } transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100`}
        >
          {icon}
          <span className='ml-4 cursor-pointer'>{title}</span>
        </span>
      </NextLink>
    </>
  );
};
