import { useState,useCallback, useEffect,useRef } from 'react'
function App() {
  const [length, setLength] = useState(8);
  const [number,setNumber]=useState(false);
  const [char,setChar]=useState(false);
  const [password,setPassword] = useState("");


  //useref hook
  const passwordref= useRef(null)

  const passwordGenerator =useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghilklmnopqrstuvwxyz";
    if(number)str+="0123456789"
    if(char) str+="!@$%^-_+[{}~`"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass+=str.charAt(char);
    }
    setPassword(pass)
  },[length,number,char,setPassword])
  const copybord=useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,7)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator();
  },[length,number,char,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3'
          placeholder='password' readOnly ref={passwordref}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copybord}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" min={0} max={100} value={length}
             className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
           />
            <label>Length:{length}</label>
          </div>
            <div className='flex items-center gap-x-1'>
              <input
              type="checkbox" defaultChecked={number} id="numberInput" onChange={()=>{
                setNumber((prev) => !prev);
              }}/>
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
        </div>
    </>
  )
}

export default App
