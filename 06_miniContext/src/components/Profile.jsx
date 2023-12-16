
import React,{useContext} from 'react'
import UserContex from '../contex/UserContex'

function Profile() {
    const {user}=useContext(UserContex)
    
    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
