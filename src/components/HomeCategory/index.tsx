import CategoryBottom from '@/components/HomeCategory/CategoryBottom';
import CategoryRight from '@/components/HomeCategory/CategoryRight';
import React from 'react';

const HomeCategory = () => {
  return (
    <div className='xs:flex-col xs:space-y-4 flex w-full lg:flex-row lg:space-x-4 lg:space-y-0'>
      <CategoryBottom
        text={`Living Room`}
        url={'#'}
        img='/images/chair-image.jpg'
      />
      <div className='flex w-full flex-col items-start justify-start space-y-4'>
        <CategoryRight
          text={`Bedroom`}
          url={'#'}
          img='/images/table-image.jpg'
        />
        <CategoryRight
          text={`Kitchen`}
          url={'#'}
          img='/images/toaster-image.jpg'
        />
      </div>
    </div>
  );
};

export default HomeCategory;
