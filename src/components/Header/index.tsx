'use client';

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import { menuItems } from '@/constant/config';

import { AccountIcon, CartIcon, MobileMenuIcon, SearchIcon } from '~/svg/icons';
import MobileMenu from '@/components/Header/MobileMenu';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className='flex w-full justify-between p-4 lg:container lg:mx-auto'>
        <div className='relative mx-auto flex w-full flex-wrap items-center justify-between'>
          <div className='flex items-center justify-start'>
            <div className='xs:flex lg:hidden'>
              <button
                onClick={() => setOpen(!isOpen)}
                className='inline-flex items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 lg:hidden'
              >
                <span className='sr-only'>Open main menu</span>
                <MobileMenuIcon />
              </button>
            </div>
            <a
              href='/'
              className='flex items-center space-x-3 rtl:space-x-reverse'
            >
              <p className='xs:text-base font-medium text-black lg:text-2xl'>
                3legant.
              </p>
            </a>
          </div>
          <div
            className='xs:hidden xs:w-full items-center justify-between lg:flex lg:w-auto'
            id='navbar-sticky'
          >
            <ul className='xs:flex-col xs:p-4 flex font-medium lg:flex-row lg:space-x-8 lg:p-0'>
              {menuItems.map((item: any, i: number) => (
                <li key={i}>
                  <a
                    href={item.url}
                    className={`block font-medium capitalize ${
                      pathname === item.url ? 'text-primary' : 'text-secondary'
                    }`}
                    aria-current='page'
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center justify-start lg:space-x-5'>
            <a href='#' className='xs:hidden lg:block'>
              <SearchIcon />
            </a>
            <a href='#' className='xs:hidden lg:block'>
              <AccountIcon />
            </a>
            <a href='#' className='inline-flex items-center justify-center'>
              <CartIcon />
              <p className='bg-cs-black-100 inline-flex h-4 w-4 items-center justify-center rounded-full text-xs font-medium text-white'>
                2
              </p>
            </a>
          </div>
        </div>
      </nav>

      {isOpen && (
        <>
          <div className='z-9 fixed inset-x-0 inset-y-0 h-full w-full bg-black bg-opacity-40' />
          <div className='text-primary z-99 fixed inset-x-0 inset-y-0 h-full w-[90%] bg-white p-4'>
            <MobileMenu setOpen={setOpen} isOpen={isOpen} />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
