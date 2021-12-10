function App() {
  return (
    <div className='flex h-screen text-gray-100'>
      <div className='bg-gray-900 p-3 space-y-2 overflow-y-scroll'>
        <div
          className='bg-white text-gray-800 rounded-full w-12 h-12 flex 
        items-center justify-center'
        >
          TW
        </div>
        {[...Array(40)].map((_, index) => (
          <div
            className='bg-white text-gray-800 rounded-full w-12 h-12 flex 
        items-center justify-center'
          >
            {index}
          </div>
        ))}
      </div>
      <div className='bg-gray-800 flex flex-col w-60'>
        <div className='px-3 h-12 flex items-center shadow-md font-title'>
          Tailwind CSS
        </div>
        <div className='text-gray-300 p-3 flex-1 space-y-2 overflow-y-scroll'>
          <p className='text-white'>channel (unread)</p>
          {[...Array(40)].map((_, index) => (
            <p>channel {index}</p>
          ))}
        </div>
      </div>
      <div className='bg-gray-700 flex flex-1 flex-col'>
        <div className='px-3 h-12 flex items-center shadow-md'>General</div>
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
    </div>
  );
}

export default App;
