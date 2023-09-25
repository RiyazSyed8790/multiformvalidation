import React from "react";
import Arcade from "./Arcade"
import Pro from "./Pro"
import Advanced from "./Advanced"
export default function Page2(props){
  //const [hidden,setHidden] = React.useState(1);  
    
    // function toggler(e){
    //   setHidden(e);
    // }
    
    return(
        <section className=' rounded-xl  px-0 py-4 md:px-0 md:py-0 flex justify-center text-left info w-11/12 md:w-4/5 h-4/5 md:h-full z-10 bg-white'>
          <div className='flex  flex-col justify-between w-4/5 h-full md:justify-evenly '>
            <div>
            <h2 className='tracking-wide text-[#012257] font-semibold text-2xl md:text-3xl '>Select your plan</h2>
            <h3 className=' text-gray-500 text-base'>You have the option of monthly or yearly billing.</h3>
            </div>
            <div className="tiers-section flex flex-wrap md:flex-nowrap w-full child:my-2 md:child:mr-2 justify-between">
              <div onClick={()=>props.tier("Arcade")} style={props.active==="Arcade"?{borderColor:"blue"}:{}} className="tier-card md:w-1/3 w-full cursor-pointer md:h-full grayBord flex md:flex-col px-4 py-4 justify-start items-center md:items-start  md:justify-between">
                <Arcade />
                <div className=" mx-4 md:my-2 md:mx-0">
                  <h2 className=" text-[#012257] font-semibold text-base">Arcade</h2>
                  <h3 style={props.hide===1?{display:"none"}:{display:"block"}} className=' text-gray-500 text-sm'>${props.prices[0].mo}/month</h3>
                  <h3 style={props.hide===2?{display:"none"}:{display:"block"}} className=' text-gray-500 text-sm'>${props.prices[0].yr}/yr</h3>
                  <h3 style={props.hide===2?{display:"none"}:{display:"block"}} className=' text-[#012257] text-sm font-thin'>2 months free</h3>
                </div>
              </div>
              <div onClick={()=>props.tier("Advanced")} style={props.active==="Advanced"?{borderColor:"blue"}:{}} className="tier-card md:w-1/3 w-full cursor-pointer md:h-full grayBord flex md:flex-col px-4 py-4 justify-start items-center md:items-start  md:justify-between">
              <Advanced />
              <div className=" mx-4 md:my-2 md:mx-0">
                  <h2 className=" text-[#012257] font-semibold text-base">Advanced</h2>
                  <h3 style={props.hide===1?{display:"none"}:{display:"block"}} className=' text-gray-500 text-sm'>${props.prices[1].mo}/month</h3>
                  <h3 style={props.hide===2?{display:"none"}:{display:"block"}} className=' text-gray-500 text-sm'>${props.prices[1].yr}/yr</h3>
                  <h3 style={props.hide===2?{display:"none"}:{display:"block"}} className=' text-[#012257] text-sm font-thin'>2 months free</h3>
                </div>
              </div>
              <div onClick={()=>props.tier("Pro")} style={props.active==="Pro"?{borderColor:"blue"}:{}} className="tier-card md:w-1/3 w-full cursor-pointer md:h-full grayBord flex md:flex-col px-4 py-4 justify-start items-center md:items-start  md:justify-between">
              <Pro />
              <div className=" mx-4 md:my-2 md:mx-0">
                  <h2 className=" text-[#012257] font-semibold text-base">Pro</h2>
                  <h3 style={props.hide===1?{display:"none"}:{display:"block"}} className=' text-gray-500 text-sm'>${props.prices[2].mo}/month</h3>
                  <h3 style={props.hide===2?{display:"none"}:{display:"block"}} className=' text-gray-500 text-sm'>${props.prices[2].yr}/yr</h3>
                  <h3 style={props.hide===2?{display:"none"}:{display:"block"}} className=' text-[#012257] text-sm font-thin'>2 months free</h3>
                </div>
              </div>
            </div>
            <div className=" flex  items-center  md:h-1/6 justify-center my-4 md:my-0 child:mx-4 ">
              <h2 className=" text-[#012257] font-semibold text-base">Monthly</h2>
              <div className=" flex justify-between items-center child:mx-1 rounded-xl bg-[#012257] md:w-[10%] md:h-1/3 w-[1/5] h-4/5  ">
                <button onClick={()=>props.hider(2)} style={props.hide===1?{backgroundColor:"#012257"}:{}} className="  bg-white rounded-xl h-3 w-3 md:h-4 md:w-4"></button>
                <button onClick={()=>props.hider(1)} style={props.hide===2?{backgroundColor:"#012257"}:{}} className="  bg-white  rounded-xl h-3 w-3 md:h-4 md:w-4"></button>
              </div>
              <h2 className=" text-[#012257] font-semibold text-base">Yearly</h2>
            </div>
            <div className=' flex justify-center my-4 md:my-0 md:justify-between'>
              <button onClick={props.back} className=' text-[#052859] h-12 w-24 rounded-xl bg-white'>Go Back</button>  
              <button onClick={props.click} className=' text-white h-12 w-24 rounded-xl bg-[#052859]'>Next Step</button>
            </div>
          </div>
        </section>
    )
}