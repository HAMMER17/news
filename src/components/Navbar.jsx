import React from 'react'
import '../style/navbar.css'
import { BsSunFill } from 'react-icons/bs'
import { IoCloudyNight } from 'react-icons/io5'
import { FaUserGraduate } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


const Navbar = ({ icon, changeIcon }) => {

  return (
    <div className='navbar' >
      <h3><FaUserGraduate className='navbar-icon' /></h3>

      <NavLink to={'/'} end>Home</NavLink>
      <NavLink to={'/post'}>News</NavLink>

      {icon ? <span className='navbar-icon'><BsSunFill onClick={changeIcon} /></span> :
        <span className='navbar-icon'><IoCloudyNight onClick={changeIcon} /></span>}
    </div>
  )
}

export default Navbar;
