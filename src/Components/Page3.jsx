import React from "react";
export default function Page3(props){
    
    return(
        <section className=' rounded-xl  px-0 py-4 md:px-0 md:py-0 flex justify-center text-left info w-11/12 md:w-4/5 h-4/5 md:h-full z-10 bg-white'>
          <div className='flex  flex-col justify-between w-4/5 h-full md:justify-evenly '>
            <div>
            <h2 className='tracking-wide text-[#012257] font-semibold text-2xl md:text-3xl '>Pick add-ons</h2>
            <h3 className=' text-gray-500 text-base'>Add-ons help enhancing your gaming experience.</h3>
            </div>
            <div className="checks child:my-2 ">
                <div className="first-cond grayBord  flex items-center px-1 py-3 md:py-4 md:px-4  justify-between ">
                    <div className="flex  items-center child:mx-1 md:child:mx-2 ">
                    <input name="addOns" id="opt1" checked={props.isCheck.includes("Online service")} className=" accent-[#443EF9] cursor-pointer w-5 h-5 rounded-md " onChange={(e)=>props.change(e)} type="checkbox" value="Online service"  />
                    <div className=" md:mx-4">
                        <h2 className=" text-[#012257] font-semibold text-base">Online service</h2>
                        <h3 className=' text-gray-500 text-sm'>Access to multiplayer games</h3>
                    </div>
                    </div>
                    <h3 style={props.format===2?{display:"none"}:{display:"block"}} className=' text-[#443EF9] text-sm'>+${props.prices[0].yr}/yr</h3>
                    <h3 style={props.format===1?{display:"none"}:{display:"block"}} className=' text-[#443EF9] text-sm'>+${props.prices[0].mo}/mo</h3>

                </div>
                <div className="first-cond grayBord   flex items-center px-1 py-3 md:py-4 md:px-4  justify-between ">
                    <div className="flex  items-center child:mx-1 md:child:mx-2 ">
                    <input name="addOns" id="opt2" checked={props.isCheck.includes("Larger storage")} className=" accent-[#443EF9] cursor-pointer w-5 h-5 rounded-md " onChange={(e)=>props.change(e)} type="checkbox" value="Larger storage"  />
                    <div className=" md:mx-4">
                        <h2 className=" text-[#012257] font-semibold text-base">Larger storage</h2>
                        <h3 className=' text-gray-500 text-sm'>Extra 1TB of cloud save</h3>
                    </div>
                    </div>
                    <h3 style={props.format===2?{display:"none"}:{display:"block"}} className=' text-[#443EF9] text-sm'>+${props.prices[1].yr}/yr</h3>
                    <h3 style={props.format===1?{display:"none"}:{display:"block"}} className=' text-[#443EF9] text-sm'>+${props.prices[1].mo}/mo</h3>
                </div>
                <div className="first-cond grayBord  flex items-center px-1 py-3 md:py-4 md:px-4  justify-between ">
                    <div className="flex  items-center child:mx-1 md:child:mx-2 ">
                    <input name="addOns" id="opt3" checked={props.isCheck.includes("Customaizable profile")} className=" accent-[#443EF9] cursor-pointer w-5 h-5 rounded-md " onChange={(e)=>props.change(e)} type="checkbox" value="Customaizable profile"  />
                    <div className=" md:mx-4">
                        <h2 className=" text-[#012257] font-semibold text-base">Customaizable profile</h2>
                        <h3 className=' text-gray-500 text-sm'>Custom theme on your profile</h3>
                    </div>
                    </div>
                    <h3 style={props.format===2?{display:"none"}:{display:"block"}} className=' text-[#443EF9] text-sm'>+${props.prices[2].yr}/yr</h3>
                    <h3 style={props.format===1?{display:"none"}:{display:"block"}} className=' text-[#443EF9] text-sm'>+${props.prices[2].mo}/mo</h3>
                </div>
            </div>
            <div className=' flex justify-center my-4 md:my-0 md:justify-between'>
              <button onClick={props.back} className=' text-[#052859] h-12 w-24 rounded-xl bg-white'>Go Back</button>  
              <button onClick={props.click} className=' text-white h-12 w-24 rounded-xl bg-[#052859]'>Next Step</button>
            </div>
          </div>
        </section>
    )
}