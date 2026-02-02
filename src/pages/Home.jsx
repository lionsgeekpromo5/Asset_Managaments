import React from 'react'
import { ProjectImages, AllIcons, DataJson } from '../constants'

function Home() {
 const Qoutes = DataJson.QoutesData.quotes
 console.log(Qoutes[0].image);
 
  
  return (
    <div>
      <h1>Home</h1>
      <img src={ProjectImages.cssLogo} alt="" />
      <img src={ProjectImages.reactLogo} alt="" />
      <img src={ProjectImages[Qoutes[0].image]} alt="" />
      <AllIcons.CartIcon />
    </div>
  )
}

export default Home
