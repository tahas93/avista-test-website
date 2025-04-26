import React from 'react';
import { RightArrowIcon } from '~/svg/icons';

interface IconLinkProps {
  text: string;
  url: string;
  arrow?: boolean;
  arrowClass?: string;
  underline?: boolean;
  className?: string;
}

const IconLink = (props: IconLinkProps) => {
  return (
    <a
      href={props.url}
      className={
        `${
          props.underline ? 'border-primary border-b' : ''
        } font-medium' inline-flex items-center justify-start text-base
      ` + props.className
      }
    >
      <span className='mr-1'>{props.text || `Shop Now`}</span>
      {props.arrow && (
        <RightArrowIcon className={props.arrowClass || 'h-5 w-5'} />
      )}
    </a>
  );
};

export default IconLink;
