import { Route, Routes } from 'react-router-dom';
import { NavLink, ServerLayout } from './components';
import Image1 from './assets/images/servers/mirage.png';
import Image2 from './assets/images/servers/next.png';
import Image3 from './assets/images/servers/tailwind.png';
import { Discord } from './components/Icon';

function App() {
  const servers = [
    { id: 1, img: Image1 },
    { id: 2, img: Image2 },
    { id: 3, img: Image3 },
  ];

  return (
    <div className='flex h-screen text-gray-100'>
      <div className='bg-gray-900 p-3 space-y-2 overflow-y-scroll'>
        <NavLink href='/'>
          <Discord className='h-5 w-7' />
        </NavLink>
        <hr className='border-t-white/[.06] border-t-2 rounded mx-2' />
        {servers.map((server) => (
          <NavLink href={`/servers/${server.id}`} key={server.id}>
            <img src={server.img} alt='server' />
          </NavLink>
        ))}
      </div>
      <Routes>
        <Route path='/' element={<ServerLayout name={'Dashboard'} />} />
        <Route path='/servers/:id' element={<ServerLayout />} />
      </Routes>
    </div>
  );
}

export default App;
