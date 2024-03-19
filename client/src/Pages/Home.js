import React from 'react'
import NavBar from '../Components/NavBar'
import HomeContent from '../Components/HomeContent'

function Home() {
  return (
    <div className='bg-fixed ' style={{ backgroundImage: 'url(login.jpg)' }}>
        <NavBar/>
        <HomeContent/> 
    </div>
  )
}

export default Home