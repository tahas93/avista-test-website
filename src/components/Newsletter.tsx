import { MailIcon } from 'lucide-react';
import React from 'react';

const NewsLetter = () => {
  return (
    <div className='xs:bg-cs-white-300 lg:bg-newsletter flex w-full items-center justify-center lg:bg-cover'>
      <div className='xs:px-4 flex w-full justify-center py-24 lg:container lg:mx-auto lg:px-4'>
        <div className='xs:w-full flex flex-col items-center justify-start lg:w-5/12'>
          <h3 className='xs:text-3xl mb-2 text-center font-medium lg:text-4xl'>
            Join Our Newsletter
          </h3>
          <p className='xs:text-sm xs:mb-6 text-center lg:mb-10 lg:text-lg'>
            Sign up for deals, new products and promotions
          </p>
          <div className='relative flex w-full items-center justify-center'>
            <div className='relative inline-flex w-full items-center justify-start'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center'>
                <MailIcon className='text-primary' />
              </div>
              <input
                type='text'
                placeholder='Email address'
                className='border-cs-black-300 placeholder:text-secondary focus:border-primary w-full border-b bg-transparent py-4 pl-8 pr-16 ring-0 placeholder:text-base focus:outline-none focus:ring-0'
              />
            </div>
            <a
              href='#'
              className='text-secondary z-9 absolute inset-y-0 right-0 flex items-center justify-end text-base font-medium'
            >
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
