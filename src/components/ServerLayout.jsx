import React from 'react';
import { useParams } from 'react-router-dom';
import {
  AddPersonIcon,
  BookIcon,
  CheckIcon,
  ChevronIcon,
  SpeakerphoneIcon,
  VerifiedIcon,
} from './Icon';

function ServerLayout({ name }) {
  const { id } = useParams();
  return (
    <>
      <div className='bg-gray-800 flex flex-col w-60'>
        <button
          className='px-4 h-12 flex items-center shadow-sm font-title 
          text-white text-[15px] hover:bg-gray-550/[0.16] transition'
        >
          <div className='relative w-4 h-4 mr-1'>
            <VerifiedIcon className='w-4 h-4 text-gray-550 absolute' />
            <CheckIcon className='w-4 h-4 absolute' />
          </div>
          {/* {name ?? `Server ${id}`} */}
          Tailwind CSS
          <ChevronIcon className='w-[18px] h-[18px] ml-auto opacity-80' />
        </button>
        <div
          className='text-gray-300 flex-1 overflow-y-scroll font-medium 
        mt-[17px]'
        >
          <div className='space-y-0.5'>
            <a
              href='#'
              className='flex items-center px-2 mx-2 text-grey-300 
            hover:bg-gray-550/[0.16] py-1 rounded hover:text-gray-100 group'
            >
              <BookIcon className='h-5 w-5 text-gray-400 mr-1.5' />
              welcome
              <AddPersonIcon
                className='w-4 h-4 ml-auto text-gray-200 hover:text-gray-100
               opacity-0 group-hover:opacity-100'
              />
            </a>
            <a
              href='#'
              className='flex items-center px-2 mx-2 text-grey-300 
            hover:bg-gray-550/[0.16] py-1 rounded hover:text-gray-100 group'
            >
              <SpeakerphoneIcon className='h-5 w-5 text-gray-400 mr-1.5' />
              annoucements
              <AddPersonIcon
                className='w-4 h-4 ml-auto text-gray-200 hover:text-gray-100
               opacity-0 group-hover:opacity-100'
              />
            </a>
          </div>
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
