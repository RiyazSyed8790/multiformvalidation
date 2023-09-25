import React from "react";
export default function Page4(props){
    const reducer = (state, action) => {
        switch (action.type) {
          case 'ADD_WANTED':
            return {
              ...state,
              wanted: [...state.wanted, action.index],
              weed: (parseInt(state.weed)+parseInt(action.mo)),
            };
          case 'ADD_WANTED_YEARLY': 
            return{
                ...state,
              wanted: [...state.wanted, action.index],
              weed: (parseInt(state.weed)+parseInt(action.yr)),
            }
           
          default:
            return state;
        }
      };
      const initialState = {
        wanted: [],
        weed: 0,
      };
      const [state, dispatch] = React.useReducer(reducer, initialState); 
    React.useEffect(function(){
        Object.values(props.adds).forEach((each, index) => {
            props.dat.addOns.forEach((every) => {
              if (each.val === every) {
                // Dispatch an action to update state
                if(props.moyr===2)
                dispatch({ type: 'ADD_WANTED', index, mo: each.mo });
                else
                dispatch({ type: 'ADD_WANTED_YEARLY', index, yr: each.yr });
              }
            });
          });
              },[props.adds,props.dat.addOns,props.moyr])
    return(
        <section className=' rounded-xl  px-0 py-4 md:px-0 md:py-0 flex justify-center text-left info w-11/12 md:w-4/5 h-4/5 md:h-full z-10 bg-white'>
          <div className='flex  flex-col justify-between w-4/5 h-full md:justify-evenly '>
            <div>
            <h2 className='tracking-wide text-[#012257] font-semibold text-2xl md:text-3xl '>Finishing up</h2>
            <h3 className=' text-gray-500 text-base'>Double-check everything looks OK before confirming. </h3>
            </div>
            <div className="bill child:px-2 child:py-2 child:rounded-xl">
                <div className="item bg-[#F8F9FE] flex items-center justify-between">
                    <div>
                    <h2 className=" text-[#012257] font-semibold text-base">{props.dat.tier}({props.moyr===1?"Yearly":"Monthly"})</h2>
                    <h3 onClick={props.goBack} className=' text-gray-500 text-sm underline cursor-pointer'>Change</h3>
                    </div>
                    <h3 className=' text-[#012257] font-semibold text-sm'>+${props.moyr===2?props.tiers[props.active_tier].mo:props.tiers[props.active_tier].yr}/{props.moyr===2?"mo":"yr"}</h3>
                </div>
                <div className="inline-flex bg-[#F8F9FE] relative items-center justify-center w-full">
                     <hr className="w-64 h-px my-3 bg-gray-500 border-0 dark:bg-gray-700"/>
                     <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Add-ons</span>
                </div>
                <div className=" addOns flex w- full bg-[#F8F9FE] justify-between ">
                   {props.dat.addOns.length===0?<h2 className=" text-center w-full text-gray-400 text-base">No Add-Ons selected</h2>:
                   ""}
                   <div className="  child:mb-2 "> 
                    {
                        props.dat.addOns.map((each)=>{
                            return(
                                <h3 key={each} className=' text-gray-500 text-sm '>{each}</h3>
                            )                            
                        })
                    } 
                   </div>
                   <div className="  child:mb-2 "> 
                    {
                        state.wanted.map((each)=>{

                            return(
                                <h3 key={each} className='  text-sm '>+${props.moyr===2?props.adds[each].mo:props.adds[each].yr}/{props.moyr===1?"yr":"mo"}</h3>
                            )   
                        })
                    }
                    </div>
                </div>
                <div className=" total w-full flex items-center justify-between">
                <h3 className=' text-gray-500 text-sm'>Total (per {props.moyr===1?"year":"month"})</h3>
                <h2 className="text-[#443EF9] text-2xl font-semibold">${props.moyr===1?(state.weed+props.tiers[props.active_tier].yr):(state.weed+props.tiers[props.active_tier].mo)}/{props.moyr===1?"yr":"mo"}</h2>
                </div>

            </div>
            <div className=' flex justify-center my-4 md:my-0 md:justify-between'>
              <button onClick={props.back} className=' text-[#052859] h-12 w-24 rounded-xl bg-white'>Go Back</button>  
              <button onClick={props.click} className=' text-white h-12 w-24 rounded-xl bg-[#443EF9]'>Confirm</button>
            </div>
          </div>
        </section>
    )
}