import React from "react";
export default function Page2(props){
    return(
        <section className='rounded-xl px-4 py-4 md:px-0 md:py-0 flex justify-center text-left info w-4/5 h-4/5 md:h-full z-10 bg-white'>
          <div className='flex flex-col justify-between h-full md:justify-evenly '>
            <div>
            <h2 className='tracking-wide text-[#012257] font-semibold text-3xl '>Select your plan</h2>
            <h3 className=' text-gray-500 text-base'>You have the option of monthly or yearly billing.</h3>
            </div>
            <div className=' flex justify-center md:justify-end'>
              <button onClick={props.back} className=' text-[#052859] h-12 w-24 rounded-xl bg-white'>Go Back</button>  
              <button onClick={props.click} className=' text-white h-12 w-24 rounded-xl bg-[#052859]'>Next Step</button>
            </div>
          </div>
        </section>
    )
}