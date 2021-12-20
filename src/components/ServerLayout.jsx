import React from 'react';
import * as Icons from './Icon';
import data from '../data.json';
import { ChannelLink } from '.';

function ServerLayout({ name }) {
  return (
    <>
      <div className='bg-gray-800 flex flex-col w-60'>
        <button
          className='px-4 h-12 flex items-center shadow-sm font-title 
          text-white text-[15px] hover:bg-gray-550/[0.16] transition'
        >
          <div className='relative w-4 h-4 mr-1'>
            <Icons.Verified className='w-4 h-4 text-gray-550 absolute' />
            <Icons.Check className='w-4 h-4 absolute' />
          </div>
          {/* {name ?? `Server ${id}`} */}
          Tailwind CSS
          <Icons.Chevron className='w-[18px] h-[18px] ml-auto opacity-80' />
        </button>
        <div
          className='text-gray-300 flex-1 overflow-y-scroll font-medium 
        pt-[17px] space-y-[21px]'
        >
          {data['1'].categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button
                  className='flex items-center px-0.5 text-xs font-title 
                uppercase tracking-wide'
                >
                  <Icons.Arrow className='w-3 h-3 mr-0.5'></Icons.Arrow>
                  {category.label}
                </button>
              )}
              <div className=' mt-[5px]'>
                {category.channels.map((channel) => (
                  <ChannelLink channel={channel} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-gray-700 flex flex-1 flex-col'>
        <div className='px-3 h-12 flex items-center shadow-sm'>General</div>
        <div className='p-3 flex-1 space-y-4 overflow-y-scroll'>
          {[...Array(40)].map((_, index) => (
            <p>
              A {index} :Bacon ipsum dolor amet kielbasa ground round bacon, cow
              jowl andouille filet mignon pork belly tri-tip doner burgdoggen
              shank turkey. Meatball doner burgdoggen pastrami tail shank
              andouille ham brisket alcatra pork loin prosciutto tenderloin
              meatloaf boudin. Drumstick venison filet mignon boudin beef
              biltong.
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServerLayout;
