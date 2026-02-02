import React from 'react'

function Welcome({name, age, city}) {

  return (
    <div>
      <h1 className='text-center pt-5 text-3xl font-bold'>Welcome {name} ypu are {age} years old and living in {city}</h1>
    </div>
  )
}

export default Welcome
