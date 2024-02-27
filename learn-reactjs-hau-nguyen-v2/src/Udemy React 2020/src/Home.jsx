import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div className='Home'>
      <h1 className='Home__title'>Welcome to Home Page</h1>
      <Link to='/colorlist' className='Home__link'>
        Go to Color List
      </Link>
    </div>
  )
}

export default Home
