import React from 'react'
import UserCard from '../Components/UserCard'
import DashboardLayout from './DashboardLayout'

function UserInfo( {id, role, ...rest}) {
  return (
    <div>
      <h1>User Details {id} has role {role}</h1>
      <UserCard {...rest}/>
      <DashboardLayout>
        <div>
    <h1>layout content</h1>
        </div>
        <p>Lorem, ipsum dolor.</p>
        <button>Save</button>
      </DashboardLayout>

    </div>
  )
}

export default UserInfo
