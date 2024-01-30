import React from 'react'
import './intro.css'
import bg from "../../images/image.png"
import { Link } from 'react-scroll'
import btnImg from "../../images/hireme.png"
const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Amit</span><br/>Website Designer</span>
            <p className="introPara">I am a skilled designer with experience in creating<br/> visual appeling and user friendly website</p>
            <Link><button className="btn"><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro