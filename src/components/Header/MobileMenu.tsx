import SearchBar from '@/components/SearchBar';
import { menuItems } from '@/constant/config';
import React from 'react';
import {
  CartIcon,
  CloseIcon,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  YoutubeIcon,
} from '~/svg/icons';

interface MobileMenuProps {
  setOpen: (x: any) => void;
  isOpen: boolean;
}

const MobileMenu = (props: MobileMenuProps) => {
  const { setOpen } = props;
  return (
    <div className='flex h-full flex-col content-between items-start justify-between'>
      {/* top part */}
      <div className='flex w-full flex-col space-y-5'>
        {/* logo section */}
        <div className='flex w-full items-start justify-between'>
          <a
            href='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <p className='xs:text-base font-medium text-black'>3legant.</p>
          </a>
          <a href='#' onClick={() => setOpen(false)} className='text-secondary'>
            <CloseIcon />
          </a>
        </div>

        {/* search section */}
        <SearchBar />

        {/* mobile nav items */}
        <ul className='divide-cs-white-400 flex flex-col divide-y'>
          {menuItems.map((item: any, i: number) => (
            <li key={i}>
              <a href={item.url} className={`block py-5 capitalize`}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* bottom part */}
      <div className='flex w-full flex-col space-y-4'>
        {/* cart section */}
        <div className='divide-cs-white-400 border-cs-white-400 flex flex-col divide-y border-b'>
          <a
            href='#'
            className={`text-secondary inline-flex items-center justify-between py-2 capitalize`}
          >
            <p>Cart</p>
            <p className='text-primary inline-flex items-center justify-start space-x-1'>
              <CartIcon />
              <span className='bg-cs-black-100 inline-flex h-4 w-4 items-center justify-center rounded-full text-xs font-medium text-white'>
                2
              </span>
            </p>
          </a>
          <a
            href='#'
            className={`text-secondary inline-flex items-center justify-between py-2 capitalize`}
          >
            <p>Whilist</p>
            <p className='text-primary inline-flex items-center justify-start space-x-1'>
              <HeartIcon />
              <span className='bg-cs-black-100 inline-flex h-4 w-4 items-center justify-center rounded-full text-xs font-medium text-white'>
                2
              </span>
            </p>
          </a>
        </div>

        {/* signin button */}
        <a
          href='#'
          className='bg-primary flex w-full items-center justify-center rounded-md px-4 py-3 text-center text-lg font-medium text-white'
        >
          Sign In
        </a>

        {/* social handler */}
        <div className='flex items-center justify-start space-x-8'>
          <a href='#' className=''>
            <InstagramIcon />
          </a>
          <a href='#' className=''>
            <FacebookIcon />
          </a>
          <a href='#' className=''>
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
