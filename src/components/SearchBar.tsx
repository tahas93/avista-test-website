import React from 'react';
import { SearchIcon } from '~/svg/icons';

const SearchBar = () => {
  return (
    <div className='relative flex w-full items-center justify-center'>
      <div className='pointer-events-none absolute inset-y-0 left-5 flex items-center justify-center'>
        <SearchIcon className='text-primary' />
      </div>
      <input
        type='text'
        placeholder='Search'
        className='w-full rounded-md border border-secondary bg-transparent p-4 pl-14 ring-0 placeholder:text-base placeholder:text-secondary focus:border-primary focus:outline-none focus:ring-0'
      />
    </div>
  );
};

export default SearchBar;
