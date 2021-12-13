import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavLink({ href, children }) {
  const location = useLocation();

  return (
    <Link to={href} className='block'>
      <a className='relative block group'>
        <div className='flex absolute items-center h-full -left-3'>
          <div
            className={`${
              location.pathname === href
                ? 'h-10'
                : `h-5 scale-0 
            opacity-0 group-hover:opacity-100 
            group-scale-100`
            } bg-white w-1 rounded-r
      origin-left transition-all duration-200`}
          ></div>
        </div>
        <div className='group-active:translate-y-px'>
          <div
            className={`${
              location.pathname === href
                ? 'rounded-2xl bg-brand text-white'
                : 'text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white bg-gray-700 rounded-3xl'
            } w-12 h-12 flex 
              items-center justify-center transition-all 
              duration-200 overflow-hidden`}
          >
            {children}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default NavLink;
