import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Welcome() {
  const {user} = useContext(UserContext)
  return (
    <div>
      <h1 className='text-center pt-5 text-3xl font-bold'>Welcome {user.name}  living in {user.city}</h1>
    </div>
  )
}

export default Welcome
