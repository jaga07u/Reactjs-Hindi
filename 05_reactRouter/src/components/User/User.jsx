import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
    return (
        <div className='bg-gray-400 text-xl text-white p-4'>User: {userid}</div>
    )
}

export default User
