function App() {
  return (
    <div className='flex h-screen text-gray-100'>
      <div className='bg-gray-900 p-3 space-y-2 overflow-y-scroll'>
        {/* {[...Array(40)].map((_, index) => (
          <div
            className='bg-white text-gray-800 rounded-full w-12 h-12 flex 
        items-center justify-center'
          >
            {index}
          </div>
        ))} */}

        <div
          className='bg-gray-700 text-gray-100 rounded-3xl hover:rounded-2xl w-12 h-12 flex 
        items-center justify-center transition-all hover:bg-brand hover:text-white
        duration-200'
        >
          <DiscordIcon className='h-7 w-5' />
        </div>
      </div>
      <div className='bg-gray-800 flex flex-col w-60'>
        <div className='px-3 h-12 flex items-center shadow-md font-title text-white'>
          Tailwind CSS
        </div>
        <div className='text-gray-300 p-3 flex-1 space-y-2 overflow-y-scroll font-medium'>
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

function DiscordIcon(props) {
  return (
    <svg aria-hidden='false' viewBox='0 0 28 20' {...props}>
      <path
        fill='currentColor'
        d='M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z'
      />
    </svg>
  );
}

export default App;
