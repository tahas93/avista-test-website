import IconLink from '@/components/IconLink';
import NewArrivalSlider from '@/components/NewArrival/NewArrivalSlider';
import ProductCard from '@/components/ProductCard';
import { productData } from '@/constant/config';
import React from 'react';

const NewArrival = () => {
  return (
    <div className='flex w-full flex-col items-start justify-start space-y-10'>
      <div className='xs:px-4 flex w-full justify-between lg:container lg:mx-auto lg:px-4 lg:py-0'>
        <div className='flex w-full items-end justify-between'>
          <h3 className='text-4xl font-medium text-black'>
            New
            <br />
            Arrivals
          </h3>
          <IconLink
            text='More Products'
            url=''
            arrow
            underline
            className='xs:hidden lg:inline-flex'
          />
        </div>
      </div>

      <div className='xs:px-4 xs:flex-col xs:space-y-8 flex w-full items-start justify-between lg:container lg:mx-auto lg:space-y-0 lg:px-4 lg:py-0'>
        <NewArrivalSlider />
        <IconLink
          text='More Products'
          url=''
          arrow
          underline
          className='xs:inline-flex lg:hidden'
        />
      </div>
    </div>
  );
};

export default NewArrival;
