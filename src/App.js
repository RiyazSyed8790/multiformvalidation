import './App.css';

function App() {
  return (
    <main className="App w-screen h-screen flex justify-center md:items-center">
      <section className='bord flex justify-center items-end md:items-start flex-wrap md:flex-nowrap md:w-2/3 w-full h-full md:h-2/3'>
        <nav className=' mob md:desk w-full md:w-1/4  h-1/3 md:h-[96%] flex justify-center items-start md:justify-start bord md:rounded-xl md:my-2 py-12 md:py-0 md:mx-2 absolute top-0 md:static   '>
          <ul className=' flex md:block list-none md:child:my-2 md:child:mx-6 child:mx-2'>
            <li className=' flex items-center'>
              <button className=' w-8 h-8 bg-blue-400 text-white rounded-2xl'>1</button>
              <div className=' hidden md:block text-left ml-4'>
                <h3>STEP 1</h3>
                <h2>YOUR INFO</h2>
              </div>
            </li>

            <li className=' flex items-center'>
              <button className=' w-8 h-8 bg-blue-400 text-white rounded-2xl'>2</button>
              <div className=' hidden md:block text-left ml-4'>
                <h3>STEP 2</h3>
                <h2>SELECT PLAN</h2>
              </div>
            </li>

            <li className=' flex items-center'>
              <button className=' w-8 h-8 bg-blue-400 text-white rounded-2xl'>3</button>
              <div className=' hidden md:block text-left ml-4'>
                <h3>STEP 3</h3>
                <h2>ADD-ON</h2>
              </div>
            </li>

            <li className=' flex items-center'>
              <button className=' w-8 h-8 bg-blue-400 text-white rounded-2xl'>4</button>
              <div className=' hidden md:block text-left ml-4'>
                <h3>STEP 4</h3>
                <h2>SUMMARY</h2>
              </div>
            </li>
          </ul>
        </nav>
        <section className=' bord  info w-3/4 h-4/5 md:h-full z-10 bg-white'>
          <h2>TBD</h2>
        </section>
      </section>
    </main>
  );
}

export default App;
