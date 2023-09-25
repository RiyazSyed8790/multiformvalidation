import './App.css';
import React from 'react';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Navbar from './Components/Navbar';
import Page4 from './Components/Page4';
function App() {
  const [formdata,setData] = React.useState([{
    name:"",
    email:"",
    phone:"",
    tier:"Arcade",
    act_tier:0,
    addOns:[],
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
                let index = prev[0].addOns.indexOf(value);
                prev[0].addOns.splice(index,1);
              }
              return {
                ...each,
                [name]: prev[0].addOns.sort().reverse(),
              }
            })
          })
        }
      
  }
  function tierHandler(e){
      setData((prev)=>{
        let place = 0;
        switch(e){
          case "Arcade":
            place=0
            break;
          case "Advanced":
            place=1
            break;
          case "Pro":
            place=2
            break;
          default:
            console.log("never prints");
            break;      
        }
        return prev.map((each)=>{
          return {
            ...each,
            tier:e,
            act_tier:place
          }
        })
      })
    
  }

  function validator(){
    formdata.map((each)=>{
      let splicer = each.email.split("");
      if((each.name.trim()==="" && act===1 ))
      {
        setMiss([1]);}
      else if((each.email==="" && act===1) )
      {
        setMiss([2]);}
      else if((each.phone==="" && act===1) )
      {
        setMiss([3]);}
      else if((!splicer.includes("@") && act===1)){
        setMiss([0]);
        alert("Invalid email!")
      }
      else if(isNaN(each.phone) && act===1){
        setMiss([3]);
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
  const tier_prices=[{
    id:"Arcade",
    mo:9,
    yr:90
  },
  {
    id:"Advanced",
    mo:12,
    yr:120
  },
  {
    id:"Pro",
    mo:15,
    yr:150
  }
]
const addOns_prices=[
  {
    val:"Online service",
    mo:1,
    yr:10
  },
  {
    val:"Larger storage",
    mo:2,
    yr:20
  },
  {
    val:"Customaizable profile",
    mo:2,
    yr:20
  }
]
  const arr = [
    <Page1 click={validator} miss={miss} change={formHandler} name_val={formdata[0].name} email_val={formdata[0].email} phone_val={formdata[0].phone} />,
    <Page2 back={goBack} click={validator} tier={tierHandler} hider={toggler} hide={hidden} active={formdata[0].tier} prices={tier_prices} />,
    <Page3 back={goBack} click={validator} change={formHandler} isCheck={formdata[0].addOns} format={hidden} prices={addOns_prices} />,
    <Page4 back={goBack} click={validator} dat={formdata[0]}  tiers={tier_prices} active_tier={formdata[0].act_tier} adds={addOns_prices} moyr={hidden} />
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
