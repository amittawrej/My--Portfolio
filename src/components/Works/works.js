import React from 'react'
import './works.css'
import GoldGym from '../../images/goldgym.png'
import Todo from '../../images/todo.png'
const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">I take pride in paying attention to the smallest details</span>
    <div className="worksImgs">
    <   div className="workItem">
            <img src={GoldGym} alt="GoldGym"            className="worksImg" />
            <p className='imgDesc'>Gold Gym</p>
        </div>
        <div className="workItem">
            <img src={Todo} alt="Todo" className="worksImg" />
            <p className='imgDesc'>Task Manager App</p>
        </div>
    </div>
    <button className="worksBtn">See More</button>

    </section>
  )
}

export default Works