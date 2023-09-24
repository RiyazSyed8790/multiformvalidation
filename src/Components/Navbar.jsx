import React from "react";
export default function Navbar(props){
    return(
        <nav className=' mob md:desk w-full md:w-1/4  h-1/3 md:h-[96%] flex justify-center items-start md:justify-start  md:rounded-xl md:my-2 py-12 md:py-0 md:mx-2 absolute top-0 md:static   '>
          <ul className=' flex md:block list-none md:child:my-6 md:child:mx-6 child:mx-2'>
            <li className=' flex items-center tracking-wider'>
              <button style={props.active===1?{backgroundColor:"#C2E6FF",color:"#05274D"}:{backgroundColor:"transparent",color:"white"}} className='  w-8 h-8 whiteBord  font-semibold rounded-2xl'>1</button>
              <div className='  hidden  md:block text-left ml-4'>
                <h3 className=' text-sm   text-[#a7a5f1]'>STEP 1</h3>
                <h2 className=' text-base leading-4  text-white'>YOUR INFO</h2>
              </div>
            </li>

            <li className=' flex items-center'>
              <button style={props.active===2?{backgroundColor:"#C2E6FF",color:"#05274D"}:{backgroundColor:"transparent",color:"white"}} className=' whiteBord w-8 h-8  font-semibold  rounded-2xl'>2</button>
              <div className='  hidden md:block text-left ml-4'>
                <h3 className=' text-sm   text-[#a7a5f1]'>STEP 2</h3>
                <h2 className=' text-base leading-4  text-white'>SELECT PLAN</h2>
              </div>
            </li>

            <li className=' flex items-center'>
              <button style={props.active===3?{backgroundColor:"#C2E6FF",color:"#05274D"}:{backgroundColor:"transparent",color:"white"}} className=' whiteBord w-8 h-8  font-semibold  rounded-2xl'>3</button>
              <div className='  hidden md:block text-left ml-4'>
                <h3 className=' text-sm   text-[#a7a5f1]'>STEP 3</h3>
                <h2 className=' text-base leading-4  text-white'>ADD-ON</h2>
              </div>
            </li>

            <li className=' flex items-center'>
              <button style={props.active===4?{backgroundColor:"#C2E6FF",color:"#05274D"}:{backgroundColor:"transparent",color:"white"}} className=' whiteBord w-8 h-8  font-semibold  rounded-2xl'>4</button>
              <div className='  hidden md:block text-left ml-4'>
                <h3 className=' text-sm   text-[#a7a5f1]'>STEP 4</h3>
                <h2 className=' text-base leading-4  text-white'>SUMMARY</h2>
              </div>
            </li>
          </ul>
        </nav>
    )
}