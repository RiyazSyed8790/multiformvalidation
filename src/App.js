import './App.css';
import React from 'react';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Navbar from './Components/Navbar';
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
  const [act,setAct] = React.useState(1);
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
  function tierHandler(e){
      setData((prev)=>{
        return prev.map((each)=>{
          return {
            ...each,
            tier:e
          }
        })
      })
    
  }
  console.log(act);
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
        setMiss([0]);
        setAct(prev=>prev+1);
      }
      return each;
    }) 
  }
  function goBack(){
    setAct(prev=>prev-1);
  }
  function navigator(e){
    setAct(e);
  }
  const arr = [
    <Page1 click={validator} miss={miss} change={formHandler} name_val={formdata[0].name} email_val={formdata[0].email} phone_val={formdata[0].phone} />,
    <Page2 back={goBack} click={validator} tier={tierHandler} active={formdata[0].tier} />
  ]
  return (
    <main className="App bg-[#EEF5FF] ubu w-screen h-screen flex justify-center md:items-center">
      <section className=' bg-[#EEF5FF] md:bg-white rounded-xl flex justify-center items-end md:items-start flex-wrap md:flex-nowrap md:w-2/3 w-full h-full md:h-2/3'>
        <Navbar active={act} click={navigator} />
        {arr[act-1]}
      </section>
    </main>
  );
}

export default App;
