import React from 'react';
import { HeartIcon, StarIcon } from '~/svg/icons';

interface ProductCardProps {
  name: string;
  image: string;
  url: string;
  price: string;
  priceBefore: string;
}

const ProductCard = (props: ProductCardProps) => {
  const { name, image, url, price, priceBefore } = props;
  return (
    <div className='flex flex-col items-start justify-start space-y-4 lg:w-64'>
      {/* image section */}
      <div className='bg-cs-white-100 cs-img-block relative flex h-80 w-full items-center justify-center'>
        <div className='absolute left-5 top-5 inline-flex flex-col space-y-2'>
          <p className='rounded-[4px] bg-white px-3 text-center text-base font-medium uppercase'>
            new
          </p>
          <p className='bg-cs-green-100 text-cs-white-200 rounded-[4px] px-3 text-center text-base font-medium uppercase'>
            -50%
          </p>
        </div>
        <a
          href='#'
          className='cs-hover-show absolute right-5 top-5 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition duration-300 ease-in-out'
        >
          <HeartIcon className='text-secondary' />
        </a>
        <img src={image} alt={name} className='mix-blend-multiply' />
        <div className='absolute bottom-0 w-full p-5'>
          <a
            href='#'
            className='cs-hover-show bg-primary text-cs-white-200 flex w-full justify-center rounded-md px-4 py-2 text-center text-base font-medium transition duration-300 ease-in-out'
          >
            Add to cart
          </a>
        </div>
      </div>

      {/* bottom section */}
      <div className='flex w-full flex-col items-start justify-start space-y-3'>
        {/* rating section */}
        <div className='text-cs-black-200 flex w-full items-center justify-start space-x-1'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>

        {/* title section */}
        <div className='flex w-full items-start justify-start'>
          <p className='text-base font-medium'>{name}</p>
        </div>

        {/* price section */}
        <div className='flex w-full items-center justify-start space-x-2'>
          <p className='font-medium'>${price}</p>
          {priceBefore !== '' && (
            <p className='text-secondary line-through'>${priceBefore}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
