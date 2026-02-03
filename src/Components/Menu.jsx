import React from 'react'
import Avatar from './Avatar'

function Menu() {
  return (
    <div className='h-[80vh] flex flex-col justify-between'>
      <ul>
        <li>Home</li>
         <li>About</li>
          <li>Contact</li>
      </ul>
      <Avatar />
    </div>
  )
}

export default Menu
