import Tick from "./Tick"
import React from "react"
//import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Thankyou(){
    const [time,setTime] = React.useState(10);
    React.useEffect(function(){
        setInterval(() => {
            setTime(prev=>prev-1);
          }, 1000);
        
        setTimeout(function(){
            clearInterval(time);
            window.location.reload();
        },10000)
        
        return () => {
            clearInterval(time);
          };
    },[])    
    return(
        <section className=' rounded-xl  px-0 py-4 md:px-0 md:py-0 flex justify-center items-center text-left info w-11/12 md:w-4/5 h-4/5 md:h-full z-10 bg-white'>
          <div className=" flex flex-col justify-center items-center w-2/3">  
            <Confetti className=" w-full h-full"  />
            <Tick />
            <h2 className=" text-2xl my-2 text-[#012257] font-semibold tracking-wide">Thank you!</h2>
            <h3 className=' text-gray-500 my-2 text-sm text-center'>Thanks for confirming your subscription! We hope you have fun using this platform. If you ever need support, feel free to email us at support@gaming4gamers.com </h3>
            <h3 className=' text-gray-500 my-2 text-sm text-center'>This page will reload in {time} seconds...</h3>
            
        </div>
        </section>
    )
}