import React from 'react';
import * as Icons from './Icon';

function ChannelLink({ channel }) {
  let Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;
  return (
    <a
      key={channel.id}
      href='#'
      className='flex items-center px-2 mx-2 text-grey-300 
            hover:bg-gray-550/[0.16] py-1 rounded hover:text-gray-100 group'
    >
      <Icon className='h-5 w-5 text-gray-400 mr-1.5' />
      {channel.label}
      <Icons.AddPerson
        className='w-4 h-4 ml-auto text-gray-200 hover:text-gray-100
               opacity-0 group-hover:opacity-100'
      />
    </a>
  );
}

export default ChannelLink;
