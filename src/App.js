import './App.css';
import React from 'react';
function App() {
  const [formdata,setData] = React.useState([{
    name:"",
    email:"",
    phone:"",
    tier:1,
    fiscal:1,
    addOns:[1,2,3]
  }]);
  function formHandler(e){
    const {name,value} = e.target;
        setData((prev)=>{
         return prev.map((each)=>{
            return {
              ...each,
              [name]:value
            }
          })
        })
      
  }
  return (
    <main className="App bg-[#EEF5FF] ubu w-screen h-screen flex justify-center md:items-center">
      <section className=' bg-[#EEF5FF] md:bg-white rounded-xl flex justify-center items-end md:items-start flex-wrap md:flex-nowrap md:w-2/3 w-full h-full md:h-2/3'>
        <nav className=' mob md:desk w-full md:w-1/4  h-1/3 md:h-[96%] flex justify-center items-start md:justify-start  md:rounded-xl md:my-2 py-12 md:py-0 md:mx-2 absolute top-0 md:static   '>
          <ul className=' flex md:block list-none md:child:my-6 md:child:mx-6 child:mx-2'>
            <li className=' flex items-center tracking-wider'>
              <button className='  w-8 h-8  bg-[#C2E6FF] text-[#05274D] font-semibold rounded-2xl'>1</button>
              <div className='  hidden  md:block text-left ml-4'>
                <h3 className=' text-sm   text-[#a7a5f1]'>STEP 1</h3>
                <h2 className=' text-base leading-4  text-white'>YOUR INFO</h2>
              </div>
            </li>

            <li className=' flex items-center'>
              <button className=' whiteBord w-8 h-8 bg-transparent text-white rounded-2xl'>2</button>
              <div className='  hidden md:block text-left ml-4'>
                <h3 className=' text-sm   text-[#a7a5f1]'>STEP 2</h3>
                <h2 className=' text-base leading-4  text-white'>SELECT PLAN</h2>
              </div>
            </li>

            <li className=' flex items-center'>
              <button className=' whiteBord w-8 h-8 bg-transparent text-white rounded-2xl'>3</button>
              <div className='  hidden md:block text-left ml-4'>
                <h3 className=' text-sm   text-[#a7a5f1]'>STEP 3</h3>
                <h2 className=' text-base leading-4  text-white'>ADD-ON</h2>
              </div>
            </li>

            <li className=' flex items-center'>
              <button className=' whiteBord w-8 h-8 bg-transparent text-white rounded-2xl'>4</button>
              <div className='  hidden md:block text-left ml-4'>
                <h3 className=' text-sm   text-[#a7a5f1]'>STEP 4</h3>
                <h2 className=' text-base leading-4  text-white'>SUMMARY</h2>
              </div>
            </li>
          </ul>
        </nav>
        <section className='rounded-xl px-4 py-4 md:px-0 md:py-0 flex justify-center text-left info w-4/5 h-4/5 md:h-full z-10 bg-white'>
          <div className='flex flex-col justify-between h-full md:justify-evenly '>
            <div>
            <h2 className='tracking-wide text-[#012257] font-semibold text-3xl '>Personal Info</h2>
            <h3 className=' text-gray-500 text-base'>Please provide your name, email address, and phone number. </h3>
            </div>
            <div>
              <label htmlFor="name" className=' text-[#48546D]  text-base'>Name</label><br/>
              <input id="name" name='name' value={formdata.name}  onChange={(e)=>formHandler(e)} className=' text-[#012257] font-semibold  outline-blue-800 grayBord w-full rounded-md px-2 py-2' type='text' placeholder='e.g. Stephen King' required />
            </div>
            <div>
              <label htmlFor="mail" className=' text-[#48546D]  text-base'>Email Address</label><br/>
              <input id="mail" name="email" value={formdata.email} onChange={(e)=>formHandler(e)}  className=' text-[#012257] font-semibold outline-blue-800 grayBord w-full rounded-md px-2 py-2' type='email' placeholder='e.g. Stephenking@lorem.com' required />
            </div>
            <div>
              <label htmlFor="number" className=' text-[#48546D]  text-base'>Phone Number</label><br/>
              <input id="number" name="phone" value={formdata.phone} onChange={(e)=>formHandler(e)}  className=' text-[#012257] font-semibold outline-blue-800 grayBord w-full rounded-md px-2 py-2' type='tel' placeholder='e.g. +1 234 567 890' required />
            </div>
            <div className=' flex justify-center md:justify-end'>
              <button className=' text-white h-12 w-24 rounded-xl bg-[#052859]'>Next Step</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
