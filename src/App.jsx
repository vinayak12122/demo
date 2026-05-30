import React from 'react'

const App = () => {

  const TypeError = () =>{
    const data = undefined;
    data.map(x => x);
  }

  const promiseError = () =>{
    Promise.reject(
      new Error("Promise Failed")
    );
  }

  const referenceError =()=>{
    console.log(nonExistentVariable);
  }

  const rangeError = () => {
    const arr = new Array(-1);
  };

  const syntaxError = () => {
    eval("const x =;");
  };

  return (
    <div className='w-screen bg-slate-900 h-screen p-5'>
      <p className='text-white text-3xl'>Demo Site</p>
      <div className='gap-4 lg:flex w-full justify-center items-center pt-20 grid grid-cols-2' >
        <button
          className='bg-white p-2 text-black rounded hover:bg-white/80'
          onClick={TypeError}
        >
          Type Error
        </button>
        <button
          className='bg-white p-2 text-black rounded hover:bg-white/80'
          onClick={promiseError}
        >
          Promise Error
        </button>
        <button
          className='bg-white p-2 text-black rounded hover:bg-white/80'
          onClick={referenceError}
        >
          Reference Error
        </button>
        <button
          className='bg-white p-2 text-black rounded hover:bg-white/80'
          onClick={rangeError}
        >
          Range Error
        </button>
        <button
          className='bg-white p-2 text-black rounded hover:bg-white/80'
          onClick={syntaxError}
        >
          Syntax Error
        </button>
      </div>
    </div>
  )
}

export default App