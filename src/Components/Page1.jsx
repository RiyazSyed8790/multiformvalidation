import React from "react";
export default function Page1(props){
    return(
        <section className='rounded-xl px-4 py-4 md:px-0 md:py-0 flex justify-center text-left info w-4/5 h-4/5 md:h-full z-10 bg-white'>
          <div className='flex flex-col justify-between h-full md:justify-evenly '>
            <div>
            <h2 className='tracking-wide text-[#012257] font-semibold text-3xl '>Personal Info</h2>
            <h3 className=' text-gray-500 text-base'>Please provide your name, email address, and phone number. </h3>
            </div>
            <div>
              <div className=' flex w-full justify-between'>
              <label htmlFor="name" className=' text-[#48546D]  text-base'>Name</label>
              <label style={props.miss.includes(1)?{display:"block"}:{}} htmlFor="name"  className=' text-red-500 hidden  text-base'>This field is required</label>
              </div>
              <input autoComplete="on" style={props.miss.includes(1)?{outlineColor:"red"}:{}} id="name" name='name' value={props.name_val}  onChange={(e)=>props.change(e)} className=' text-[#012257] focus:font-semibold  outline-blue-800 grayBord w-full rounded-md px-2 py-2' type='text' placeholder='e.g. Stephen King' required />
            </div>
            <div>
              <div className=' flex w-full justify-between'>
              <label htmlFor="mail" className=' text-[#48546D]  text-base'>Email Address</label>
              <label style={props.miss.includes(2)?{display:"block"}:{}} htmlFor="email" className=' text-red-500 hidden  text-base'>This field is required</label>
              </div>
              <input autoComplete="on" style={props.miss.includes(2)?{outlineColor:"red"}:{}} id="mail" name="email" value={props.email_val} onChange={(e)=>props.change(e)}  className=' text-[#012257] focus:font-semibold outline-blue-800 grayBord w-full rounded-md px-2 py-2' type='email' placeholder='e.g. Stephenking@lorem.com' required />
            </div>
            <div>
              <div className=' flex w-full justify-between'>
              <label htmlFor="number" className=' text-[#48546D]  text-base'>Phone Number</label>
              <label style={props.miss.includes(3)?{display:"block"}:{}} htmlFor="number" className=' text-red-500 hidden  text-base'>This field is required</label>
              </div>
              <input autoComplete="on" style={props.miss.includes(3)?{outlineColor:"red"}:{}} id="number" name="phone" value={props.phone_val} onChange={(e)=>props.change(e)}  className=' text-[#012257] focus:font-semibold outline-blue-800 grayBord w-full rounded-md px-2 py-2' type='tel' placeholder='e.g. +1 234 567 890' required />
            </div>
            <div className=' flex justify-center md:justify-end'>
              <button onClick={props.click} className=' text-white h-12 w-24 rounded-xl bg-[#052859]'>Next Step</button>
            </div>
          </div>
        </section>
    )
}