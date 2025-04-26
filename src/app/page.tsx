'use client';

import HomeCategory from '@/components/HomeCategory';
import MainSlider from '@/components/MainSlider';
import NewArrival from '@/components/NewArrival';
import NewsLetter from '@/components/Newsletter';
import TextSection from '@/components/TextSection';
import * as React from 'react';

export default function HomePage() {
  return (
    <div className='flex w-full flex-wrap items-start justify-start space-y-10'>
      <div className='xs:px-4 flex w-full justify-between lg:container lg:mx-auto lg:px-4 lg:py-0'>
        <div className='flex w-full flex-col space-y-10'>
          {/* main slider section */}
          <MainSlider />

          {/* text section */}
          <TextSection />

          {/* category section */}
          <HomeCategory />
        </div>
      </div>

      {/* new arrival section */}
      <NewArrival />

      {/* newletter section */}
      <NewsLetter />
    </div>
  );
}
