import { useState } from 'react'
import UserContexProvider from './contex/UserContextProvider'
import UserContex from './contex/UserContex'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContexProvider>
     <h1>React with Chai</h1>
     <Login/>
     <Profile/>
    </UserContexProvider>
  )
}

export default App
