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
            <img src={GoldGym} alt="GoldGym" className="worksImg" />
            <img src={Todo} alt="Todo" className="worksImg" />
        </div>
    </section>
  )
}

export default Works