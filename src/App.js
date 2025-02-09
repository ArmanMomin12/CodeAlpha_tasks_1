import React, { useState } from 'react'
import './App.css'

function App() {
  const [bir,setbir]=useState(" ")
  const [whats,setwhats]=useState(" ")
  const [age, setages] = useState({ years: 0, months: 0, days: 0 });
  const[massage,setmassage]=useState(" ");
  const today=new Date();

  function handleclick(){
    const whatsyear=new Date(whats);
  const birth= new Date(bir);
  
   
    
    let years=whatsyear.getFullYear()-birth.getFullYear();
    let months=whatsyear.getMonth()-birth.getMonth();
    let days=whatsyear.getDate()-birth.getDate();

    if (!bir || isNaN(birth)) {
      setmassage("Please select a valid date.");
      return;
    }

    if (birth > today) {
      setmassage("Birthdate cannot be in the future.");
      return;
    }
    if(months<0){
      years-=1;
      months+=12;
    }

    if(days<0){
      months-=1;
      days+=new Date(today.getFullYear(),today.getMonth(),0).getDate();
    }

    setages({years,months,days})
   
    if (years >= 20 && years <= 40) {
      setmassage("You are an adult!");
    } else if (years < 20) {
      setmassage("You are a teenager!");
    } else {
      setmassage("You are elder.");
    }
  }
   
   
  

  

  return (
    <>
   
<div class="card text-center"  id='cards'  style={{backgroundColor:"ButtonShadow"}}>
  <div class="card-header">
    
  </div>
  <div class="card-body" id='inputs'>
    <h5 class="card-title" id='title'>Age Calulator</h5>
    <h4>Date of Birth</h4>
    <input 
    id='dates'
    type="date"
    value={bir}
    onChange={(e)=>setbir(e.target.value)}
    style={{width:"200px",height:"40px"}}
    />
    <h4>Find Age on</h4>
   <input 
    id='dates'
    type="date"
    value={whats}
    onChange={(e)=>setwhats(e.target.value)}
    style={{width:"200px",height:"40px"}}
    />
  </div>
  <button onClick={handleclick} style={{marginLeft:'20px',marginTop:"20px"}} id='buttons'>Calculate Age</button>
  <h3>Result: </h3>
  <div class="card-footer text-body-secondary" id='output'>
    <p id='ages'>Your Age: {age.years} years, {age.months} months, {age.days} days</p>
    <p id='mass'>{massage}</p>
  </div>
</div>

<div id='foot'>
  <h2 id='www'>Www.Age_Caclulator.com</h2>
  <p style={{color:'ButtonHighlight'}} id='copy'>@copyright reserved by arman</p>
</div>

      
    </>
  );
}


export default App

