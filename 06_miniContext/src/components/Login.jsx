import React,{useState,useContext} from 'react'
import UserContex from '../contex/UserContex'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContex)
    const handleSubmit = (e)=>{
                 e.preventDefault()
                 setUser({username,password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type='text' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type='text' placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={handleSubmit}> Submit</button>
        </div>
    )
}

export default Login
