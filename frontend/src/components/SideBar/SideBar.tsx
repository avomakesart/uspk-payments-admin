import NextLink from 'next/link';
import React from 'react';
import { Link } from '..';
// import { HeartIcon, HomeIcon, LightningIcon } from '../../assets/Icons';

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = () => {
  return (
    <>
      <aside className='z-10 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0'>
        <div className='py-4 text-gray-500 dark:text-gray-400'>
          <NextLink href='/'>
            <span className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200'>
              <img
                src='https://uspk.com.mx/wp-content/uploads/2021/04/uspk-web.png'
                className='max-w-full w-36 ml-4'
                alt='Auxita logo'
              />
            </span>
          </NextLink>
          <ul className='mt-6'>
            <li className='relative px-6 py-3'>
              <Link path='/' title='Dashboard' />
            </li>
            <li className='relative px-6 py-3'>
              <Link path='/orders' title='Pedidos' />
            </li>
            <li className='relative px-6 py-3'>
              <Link path='/customers' title='Clientes' />
            </li>
            <li className='relative px-6 py-3'>
              <Link path='/products' title='Productos' />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
