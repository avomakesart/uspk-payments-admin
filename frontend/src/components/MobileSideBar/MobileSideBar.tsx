import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// import { HeartIcon, HomeIcon, LightningIcon } from '../../assets/Icons';

interface MobileSideBarProps {
  isOpen: boolean;
}

export const MobileSideBar: React.FC<MobileSideBarProps> = ({ isOpen }) => {
  const { pathname } = useRouter();

  return (
    <>
      {isOpen && (
        <>
          <aside className='fixed inset-y-0 z-20 left-0 top-3 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden'>
            <div className='py-4 text-gray-500 dark:text-gray-400'>
              <NextLink href='/'>
                <span className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200'>
                  <img
                    src='https://auxita.com/wp-content/uploads/auxita-logo-horizontal.png'
                    className='max-w-full w-36 ml-4'
                    alt='Auxita logo'
                  />
                </span>
              </NextLink>
              <ul className='mt-6'>
                <li className='relative px-6 py-3'>
                  {pathname === '/' && (
                    <span
                      className='absolute inset-y-0 left-0 w-1
                    bg-purple-600
                     rounded-tr-lg rounded-br-lg'
                      aria-hidden='true'
                    />
                  )}
                  <NextLink href='/'>
                    <span
                      className={`inline-flex items-center w-full text-sm font-semibold ${
                        pathname === '/' && 'text-gray-800'
                      } transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100`}
                    >
                      {/* <HomeIcon /> */}
                      <span className='ml-4'>Dashboard</span>
                    </span>
                  </NextLink>
                </li>
              </ul>
              <ul>
                <li className='relative px-6 py-3'>
                  {pathname === '/blood-pressure' && (
                    <span
                      className='absolute inset-y-0 left-0 w-1
                    bg-purple-600
                     rounded-tr-lg rounded-br-lg'
                      aria-hidden='true'
                    />
                  )}
                  <NextLink href='/blood-pressure'>
                    <span
                      className={`inline-flex items-center w-full text-sm font-semibold ${
                        location.pathname === '/blood-pressure' &&
                        'text-gray-800'
                      }  transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`}
                    >
                      {/* <HeartIcon /> */}
                      <span className='ml-4'>Blood Pressure Data</span>
                    </span>
                  </NextLink>
                </li>
                <li className='relative px-6 py-3'>
                  {pathname === '/kidney-disease' && (
                    <span
                      className='absolute inset-y-0 left-0 w-1
                    bg-purple-600
                     rounded-tr-lg rounded-br-lg'
                      aria-hidden='true'
                    />
                  )}
                  <NextLink href='/kidney-disease'>
                    <span
                      className={`inline-flex items-center w-full text-sm font-semibold ${
                        pathname === '/kidney-disease' && 'text-gray-800'
                      } transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`}
                    >
                      {/* <LightningIcon /> */}
                      <span className='ml-4'>Kidney Disease Data</span>
                    </span>
                  </NextLink>
                </li>
              </ul>
            </div>
          </aside>
        </>
      )}
    </>
  );
};
