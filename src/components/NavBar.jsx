import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='container flex justify-around items-center bg-cyan-600 text-white'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/store'>Store</NavLink>
        <NavLink to='/about-us'>About Us</NavLink>
    </div>
  )
}

export default NavBar