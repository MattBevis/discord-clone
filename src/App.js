function App() {
  return (
    <div className='flex h-screen text-white'>
      <div className='bg-gray-800 p-4'>
        <div
          className='bg-white text-gray-800 rounded-full w-12 h-12 flex 
        items-center justify-center'
        >
          TW
        </div>
      </div>
      <div className='bg-gray-700 flex flex-col w-60'>
        <div className='p-4 shadow-md'>Tailwind CSS</div>
        <div className='p-4 flex-1'>List</div>
      </div>
      <div className='bg-gray-600 flex-1'>
        <div className='p-4 shadow-md'>General</div>
        <div className='p-4 flex-1'>Messages</div>
      </div>
    </div>
  );
}

export default App;
