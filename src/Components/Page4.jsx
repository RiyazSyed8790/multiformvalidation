import React from "react";
export default function Page4(props){
    const [wanted,setWanted] = React.useState([]);
    //const [weed,setWeed] = React.useState([]);
    //const [total,setTotal] = React.useState("");
    React.useEffect(function(){
        //console.log(Object.values(props.adds));
        //console.log(props.dat.addOns);
        Object.values(props.adds).map((each)=>{
            props.dat.addOns.map((every)=>{
                if(each.val===every){
                    //console.log(Object.values(props.adds).indexOf(each));
                    setWanted((prev)=>[...prev,Object.values(props.adds).indexOf(each)]);
                    //setWeed((prev)=>[...prev,each.mo]);
                    //wanted.push(Object.values(props.adds).indexOf(each));
                }
                return every
            })
            return each
        })
        //console.log(weed);
        // props.moyr===1?setTotal(function(){
        //     let sum = props.tiers[props.active_tier].yr + wanted.map((each)=>{
        //         let adds = props.adds[each].yr;
        //         adds+=props.adds[each].yr;
        //         return adds;
        //      }) 
        //     return sum
        // }):setTotal(function(){
        //     let sum = props.tiers[props.active_tier].mo + wanted.map((each)=>{
        //         let adds = props.adds[each].mo;
        //         adds+=props.adds[each].mo;
        //         return adds;
        //      }) 
        //     return sum
        // })
    },[props.adds,props.dat.addOns])
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
                    <h3 className=' text-gray-500 text-sm underline'>Change</h3>
                    </div>
                    <h3 className=' text-[#012257] font-semibold text-sm'>+${props.moyr===2?props.tiers[props.active_tier].mo:props.tiers[props.active_tier].yr}/{props.moyr===2?"mo":"yr"}</h3>
                </div>
                <div className="inline-flex bg-[#F8F9FE] relative items-center justify-center w-full">
                     <hr className="w-64 h-px my-8 bg-gray-500 border-0 dark:bg-gray-700"/>
                     <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Add-ons</span>
                </div>
                <div className=" addOns flex w- full bg-[#F8F9FE] justify-between ">
                   <div className=" child:mb-2"> 
                    {
                        props.dat.addOns.map((each)=>{
                            return(
                                <h3 key={each} className=' text-gray-500 text-sm '>{each}</h3>
                            )                            
                        })
                    } 
                   </div>

                   <div className=" child:my-2"> 
                    {
                        wanted.map((each)=>{
                            return(
                                <h3 key={each} className='  text-sm '>+${props.moyr===2?props.adds[each].mo:props.adds[each].yr}/{props.moyr===1?"yr":"mo"}</h3>
                            )   
                        })
                    }
                    </div>
                </div>
                <div className=" total w-full flex justify-between">
                <h3 className=' text-gray-500 text-sm'>Total (per {props.moyr===1?"year":"month"})</h3>
                <h2 className="text-[#443EF9] text-2xl font-semibold">$Total/yr</h2>
                </div>
            </div>
          </div>
        </section>
    )
}