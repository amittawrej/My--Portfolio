import React, { useState } from 'react'
import "./navbar.css";
import logo from '../../images/logo.png'
import contactImg from '../../images/contact.png'
import {Link} from 'react-scroll';
import menu from '../../images/menu.png';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); 
  return (
   <div>
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"> Home </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem"> About </Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem"> Portfolio </Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem"> Client </Link>
      </div>
      <button className="desktopMenuButton"
      onClick={()=>{
        document.getElementById('contactPage').scrollIntoView({behavior:'smooth', block:'end'});
      }}>
        <img src={contactImg} alt="" className='desktopMenuImg' /> Contact ME
      </button>

      <img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu ? 'flex':'none'}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Home </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> About </Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Portfolio </Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Client </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Contact </Link>
      </div>
    </nav>
   </div>
   
  )
}

export default Navbar