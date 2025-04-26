'use client';
import { menuItems } from '@/constant/config';
import dayjs from 'dayjs';
import React from 'react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '~/svg/icons';

const Footer = () => {
  return (
    <div className='xs:bg-cs-black-400 lg:bg-primary text-cs-white-200 w-full'>
      <div className='flex w-full justify-between p-4 py-14 lg:container lg:mx-auto'>
        <div className='divide-secondary flex w-full flex-col items-start justify-start space-y-10 lg:divide-y'>
          <div className='xs:flex-col xs:space-y-12 flex w-full items-center lg:flex-row lg:justify-between lg:space-y-0'>
            {/* logo section */}
            <div className='divide-secondary xs:space-y-6 xs:flex-col flex items-center justify-start lg:flex-row lg:space-x-8 lg:space-y-0 lg:divide-x'>
              <a
                href='/'
                className='xs:space-y-3 flex items-center rtl:space-x-reverse lg:space-x-3 lg:space-y-0'
              >
                <p className='text-2xl font-medium text-white'>3legant.</p>
              </a>
              <hr className='border-secondary w-10 lg:hidden' />
              <p className='text-cs-white-400 lg:pl-8'>
                Gift & Decoration Store
              </p>
            </div>

            {/* footer navigation links */}
            <div className='xs:space-y-8 xs:flex-col flex items-center lg:flex-row lg:justify-between lg:space-x-8 lg:space-y-0'>
              {menuItems.map((item: any, i: number) => (
                <a
                  key={i}
                  href={item.url}
                  className='text-cs-white-200 block text-sm font-normal capitalize'
                >
                  {item.title}
                </a>
              ))}
              <a
                href='/blog'
                className='text-cs-white-200 block text-sm font-normal capitalize'
              >
                Blog
              </a>
            </div>
          </div>

          <div className='xs:flex-col xs:border-t xs:broder-secondary flex w-full items-center pt-6 lg:flex-row lg:justify-between'>
            {/* copry right and policy section */}
            <div className='xs:order-2 xs:flex-wrap xs:justify-center flex items-center text-center lg:order-1 lg:flex-nowrap lg:justify-start lg:space-x-10'>
              <p className='xs:w-full text-cs-white-400 xs:order-3 xs:mt-8 text-xs font-normal lg:order-1 lg:mt-0 lg:w-auto'>
                Copyright © {dayjs().year()} 3legant. All rights reserved
              </p>
              <a
                href='#'
                className='xs:mr-4 xs:order-1 text-sm font-medium lg:order-2 lg:mr-0'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='xs:ml-4 xs:order-2 text-sm font-medium lg:order-3 lg:m-0'
              >
                Terms of Use
              </a>
            </div>

            {/* social media handler */}
            <div className='xs:order-1 xs:mb-8 flex items-center justify-start space-x-8 lg:order-2 lg:mb-0'>
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
      </div>
    </div>
  );
};

export default Footer;
