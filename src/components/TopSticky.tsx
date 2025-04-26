'use client';
import React, { useState } from 'react';

import { CloseIcon, CouponIcon, RightArrowIcon } from '~/svg/icons';

const TopSticky = () => {
  const [isOpen, setOpen] = useState(true);
  if (isOpen) {
    return (
      <div className='bg-cs-white-100 text-cs-black-200 relative flex w-full items-center justify-center py-2'>
        <p className='inline-flex items-center justify-start'>
          <CouponIcon />
          <span className='ml-2 font-semibold'>
            30% off storewide — Limited time!
          </span>
        </p>
        <a
          href='#'
          className='text-cs-blue-100 border-cs-blue-100 xs:hidden ml-2 items-center justify-start border-b lg:inline-flex'
        >
          <span className='mr-1 font-medium'>Shop Now</span>
          <RightArrowIcon className='h-6 w-6' />
        </a>

        <a
          href='#'
          onClick={() => setOpen(false)}
          className='text-cs-black-200 absolute right-0 flex items-center justify-center px-2'
        >
          <CloseIcon />
        </a>
      </div>
    );
  } else {
    return <></>;
  }
};

export default TopSticky;
