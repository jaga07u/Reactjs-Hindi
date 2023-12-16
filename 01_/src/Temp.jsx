import React, { useState } from 'react'
import  "./temp.css"
function Temp() {
    const [result,setResult]=useState(0);
    const [sel,setSel]=useState("");
    const [inp,setInp]=useState(0);
    let res;
    const convert=()=>{
        if(sel=="Fahrenheit"){
               res=(inp * 1.8)+32;
               setResult(res);
        }
    }
    return (
        <>
          <div className='box'>
            <input type='number' placeholder='Enter temp in Celsius'onChange={(e)=>setInp(Number(e.target.value))}/>
            <select onChange={(e)=>setSel(e.target.value)}> 
                <option>Celsius</option>
                <option>Fahrenheit</option>
            </select>
            <h1>{result}</h1>
            <button onClick={convert}>Convert</button>
          </div>
          
        </>
    )
}

export default Temp
