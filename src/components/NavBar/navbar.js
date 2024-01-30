import React from 'react'
import "./navbar.css";
import logo from '../../images/logo.png'
import contactImg from '../../images/contact.png'
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
   <div>
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem"> Home </Link>
        <Link className="desktopMenuListItem"> About </Link>
        <Link className="desktopMenuListItem"> Portfolio </Link>
        <Link className="desktopMenuListItem"> Clients </Link>
      </div>
      <button className="desktopMenuButton">
        <img src={contactImg} alt="" className='desktopMenuImg' /> Contact ME
      </button>
    </nav>
   </div>
   
  )
}

export default Navbar