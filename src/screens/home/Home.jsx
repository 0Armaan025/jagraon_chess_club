import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import MiddlePart from './middlepart/MiddlePart'
import './home.css'
import { useEffect } from 'react'

const Home = () => {



  return (
    <>
      <div class="custom-cursor"></div>
      <NavBar />
      <MiddlePart />
    </>
  )
}

export default Home
