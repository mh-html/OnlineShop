import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="container mx-auto">
    <nav className='flex justify-around items-center bg-cyan-700 text-white py-4 font-bold text-2xl rounded-b-lg'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/store'>Store</NavLink>
        <NavLink to='/about-us'>About Us</NavLink>
        <NavLink to='/bascket'>Bascket</NavLink>
    </nav>
    </div>
  )
}

export default NavBar