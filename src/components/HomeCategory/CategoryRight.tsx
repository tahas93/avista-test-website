import IconLink from '@/components/IconLink';
import NextImage from '@/components/NextImage';
import React from 'react';

interface CategoryRightProps {
  text: string;
  url: string;
  img: string;
}

const CategoryRight = (props: CategoryRightProps) => {
  return (
    <div className='bg-cs-white-100 xs:p-5 flex w-full flex-row justify-start space-x-8 lg:p-8'>
      <div className='mb-5 flex flex-col items-start justify-end space-y-2'>
        <p className='text-3xl font-medium'>{props.text}</p>
        <IconLink text='Shop Now' url={props.url} arrow underline />
      </div>
      <div className='flex w-full items-center justify-center'>
        <img
          src={props.img}
          alt='table-image'
          className='mix-blend-multiply lg:w-3/4'
        />
      </div>
    </div>
  );
};
export default CategoryRight;
