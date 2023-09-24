import './App.css';
import React from 'react';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Navbar from './Components/Navbar';
function App() {
  const [formdata,setData] = React.useState([{
    name:"",
    email:"",
    phone:"",
    tier:1,
    fiscal:1,
    addOns:[]
  }]);
  const [miss,setMiss] = React.useState([]);
  const [act,setAct] = React.useState(1);
  const [hidden,setHidden] = React.useState(1);
  function toggler(e){
    setHidden(e);
  }
  function formHandler(e){
    const {name,value,type,checked} = e.target;
    //console.log(name,"value-",value);
        // setData((prev)=>{
        //  return prev.map((each)=>{
        //     return {
        //       ...each,
        //       [name]:value
        //     }
        //   })
        // })
        if(type!=="checkbox"){
          setData((prev)=>{
         return prev.map((each)=>{
            return {
              ...each,
              [name]:value
            }
          })
        })
        }
        else{
          setData((prev)=>{
            return prev.map((each)=>{
              if(!prev[0].addOns.includes(value) && checked){
                prev[0].addOns.push(value);
              }
              if(!checked){
                //console.log("Im runon")
                let index = prev[0].addOns.indexOf(value);
                prev[0].addOns.splice(index,1);
              }
              //console.log(prev[0].addOns)
              return {
                ...each,
                [name]: prev[0].addOns
              }
            })
          })
        }
      
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

  function validator(){
    formdata.map((each)=>{
      let splicer = each.email.split("");
      if(each.name.trim()==="" && act===1)
      {setMiss([1]);}
      else if(each.email==="" && act===1)
      {setMiss([2]);}
      else if(each.phone==="" && act===1)
      {setMiss([3]);}
      else if(!splicer.includes("@") && act===1){
        setMiss([0]);
        alert("Invalid email!")
      }
      else if(isNaN(each.phone && act===1)){
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
    <Page2 back={goBack} click={validator} tier={tierHandler} hider={toggler} hide={hidden} active={formdata[0].tier} />,
    <Page3 back={goBack} click={validator} change={formHandler} isCheck={formdata[0].addOns} format={hidden} />
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
