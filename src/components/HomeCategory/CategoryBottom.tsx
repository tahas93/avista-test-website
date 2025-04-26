import IconLink from '@/components/IconLink';
import NextImage from '@/components/NextImage';
import React from 'react';

interface CategoryBottomProps {
  text: string;
  url: string;
  img: string;
}

const CategoryBottom = (props: CategoryBottomProps) => {
  return (
    <div className='bg-cs-white-100 xs:p-5 flex w-full flex-col items-start justify-start space-y-8 lg:p-8'>
      <div className='flex w-full flex-col items-start justify-start space-y-2'>
        <p className='text-3xl font-medium'>{props.text}</p>
        <IconLink text='Shop Now' url={props.url} arrow underline />
      </div>

      <div className='flex w-full items-center justify-center'>
        <img
          src={props.img}
          alt='chair-image'
          className='mix-blend-multiply lg:w-4/5'
        />
      </div>
    </div>
  );
};
export default CategoryBottom;
