import './App.css';
import React from 'react';
import Page1 from './Components/Page1';
function App() {
  const [formdata,setData] = React.useState([{
    name:"",
    email:"",
    phone:"",
    tier:1,
    fiscal:1,
    addOns:[1,2,3]
  }]);
  const [miss,setMiss] = React.useState([]);
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
  function validator(){
    formdata.map((each)=>{
      let splicer = each.email.split("");
      if(each.name.trim()==="")
      {setMiss([1]);}
      else if(each.email==="")
      {setMiss([2]);}
      else if(each.phone==="")
      {setMiss([3]);}
      else if(!splicer.includes("@")){
        setMiss([0]);
        alert("Invalid email!")
      }
      else if(isNaN(each.phone)){
        setMiss([0]);
        alert("Invalid number!");
      }
      else{
        alert("Next page cums");
      }
      return each;
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
        <Page1 click={validator} miss={miss} change={formHandler} name_val={formdata[0].name} email_val={formdata[0].email} phone_val={formdata[0].phone} />
      </section>
    </main>
  );
}

export default App;
