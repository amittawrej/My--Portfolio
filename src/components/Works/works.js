import React from 'react'
import './works.css'
import GoldGym from '../../images/goldgym.png'
import Todo from '../../images/todo.png'
const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">Crafting dynamic and user-centric websites. Elevating brands through innovative design and seamless functionality. Explore my diverse portfolio of digital creations.</span>
    <div className="worksImgs">
    <   div className="workItem">
            <a href='https://goldgymby-aat.netlify.app' target="_blank" rel="noreferrer"><img src={GoldGym} alt="GoldGym"            className="worksImg" />
            <p className='imgDesc'>Gold Gym</p>
            </a>
        </div>
        <div className="workItem">
          <a  href='https://github.com/amittawrej/Daily-Task-Manager-App' target="_blank" rel="noreferrer"> 
            <img src={Todo} alt="Todo" className="worksImg" />
            <p className='imgDesc'>Task Manager App</p>
            </a>
        </div>
    </div>
    <button className="worksBtn">See More</button>

    </section>
  )
}

export default Works