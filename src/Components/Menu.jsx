import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='h-screen flex flex-col p-2 justify-between '>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
         <li>About</li>
          <li>Contact</li>
          <Link to='/counter'>
          <li>Counter</li></Link>
          <Link to='/framer-motion'><li>Framer Motion</li></Link>
      </ul>
      <Avatar />
    </div>
  )
}

export default Menu
