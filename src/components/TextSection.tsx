import React from 'react';

const TextSection = () => {
  return (
    <div className='xs:flex-col xs:space-y-5 flex w-full items-center justify-between lg:flex-row lg:space-y-0'>
      <h3 className='xs:text-[40px] xs:leading-tight font-medium lg:text-7xl'>
        Simply Unique<span className='text-secondary'>/</span> Simply Better.
      </h3>
      <p className='text-secondary xs:text-sm lg:text-base'>
        <span className='text-cs-black-200 font-semibold'>3legant</span> is a
        gift & decorations store based in HCMC, Vietnam. Est since 2019.
      </p>
    </div>
  );
};

export default TextSection;
