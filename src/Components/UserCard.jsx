import React from 'react'

function UserCard({name, age, city, email}) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <p>age: {age}</p>
      <p>city: {city}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default UserCard
