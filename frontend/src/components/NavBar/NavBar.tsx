import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileSideBar } from '..';
import { useOnClickOutside } from '../../hooks/useOnClickOutside/useOnClickOutside';

interface NavBarProps {
  ref?: any;
}

export const NavBar: React.FC<NavBarProps> = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const sidebarRef = useRef() as any;

  useOnClickOutside(sidebarRef, () => setIsSideBarOpen(false));

  // Handlers
  const handleOpenProfile = () => setIsProfileOpen(!isProfileOpen);
  const handleOpenSidebar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <header className='z-10 py-4 bg-white shadow-md dark:bg-gray-800'>
      <div className='container flex items-center justify-between h-full px-6 mx-auto text-gray-800 dark:text-gray-400 2xl:max-w-screen-xl'>
        <button
          className='p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple'
          aria-label='Menu'
          onClick={handleOpenSidebar}
        >
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>

        <MobileSideBar isOpen={isSideBarOpen} />
        {/* {isSideBarOpen &&  <div className='fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center' />} */}
        {/* <!-- Search input --> */}
        <div className='flex justify-center flex-1 lg:mr-32'>
          <div className='relative w-full max-w-xl mr-6 focus-within:text-gray-500'>
            <div className='absolute inset-y-0 flex items-center pl-2'>
              <svg
                className='w-4 h-4 text-gray-800'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
            <input
              className='w-full p-3 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input'
              type='text'
              placeholder='Search for projects'
              aria-label='Search'
            />
          </div>
        </div>
        <ul className='flex items-center flex-shrink-0 space-x-6'>
          <li className='relative'>
            <button
              className='align-middle rounded-full focus:shadow-outline-purple focus:outline-none'
              aria-label='Account'
              aria-haspopup='true'
              onClick={handleOpenProfile}
            >
              <img
                className='object-cover w-8 h-8 rounded-full'
                src='https://res.cloudinary.com/bluecatencode/image/upload/v1604417128/default_profile_glpauv.png'
                alt='User picture'
                aria-hidden='true'
              />
            </button>
            {isProfileOpen && (
              <ul
                className='absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700'
                aria-label='submenu'
              >
                <li className='flex'>
                  <Link
                    className='inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'
                    to='#'
                  >
                    <svg
                      className='w-4 h-4 mr-3'
                      aria-hidden='true'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'></path>
                    </svg>
                    <span>Profile</span>
                  </Link>
                </li>
                <li className='flex'>
                  <Link
                    className='inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'
                    to='#'
                  >
                    <svg
                      className='w-4 h-4 mr-3'
                      aria-hidden='true'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'></path>
                      <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
                    </svg>
                    <span>Settings</span>
                  </Link>
                </li>
                <li className='flex'>
                  <Link
                    className='inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'
                    to='#'
                  >
                    <svg
                      className='w-4 h-4 mr-3'
                      aria-hidden='true'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'></path>
                    </svg>
                    <span>Log out</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};
