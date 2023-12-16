import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react';

function App() {
  const [length,setLenght]=useState(8);
  const [password,setPassword]=useState("");
  const [num,setNum]=useState(false);
  const[char,setChar]=useState(false);


const PasswordChanger=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdedfhijklmnopqrstuvwxyz";
  if(num) str+="0123456789";
  if(char) str+="~`@#$%^&*(){}[]";
  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(char)
  }
  setPassword(pass);
},[length,password,num,char] );

useEffect(()=>{
  PasswordChanger();
},[length,num,char])

  return (
    <>
     <div className='box'>
      <div id="inputbox">
      <input  type='text' id='password'value={password} readOnly/>
      <button>cpy</button>
      </div>
      <input type='range' min={0} max={100} value={length} onChange={(e)=>{
             setLenght(e.target.value)
      }}/>length :{length}
      <input type='checkbox' id="number" onChange={()=>{
        setNum((prev)=> !prev);
      }}/>Number
      <input type='checkbox' id="char" onChange={()=>{
        setChar((prev)=> !prev);
      }}/>Character

     </div>
     
    </>
  )
}

export default App
