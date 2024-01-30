import React from 'react';
import './skills.css';
import UiDesign from '../../images/ui-design.png'
import WebDesign from '../../images/website-design.png'
import AppDesign from '../../images/app-design.png'
const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I am skilled passionate web designer with experience in creating visually appealing and user-friendly websites. I have a string understanding of design and a keen eye for detail. I am proficent in HTML, CSS, and Javascript, as well as design software.</span>
        <div className="skillBars">
            
            <div className="skillBar">
                <img src={UiDesign} alt="UiDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Elevate your digital experience with our cutting-edge UI/UX design. Seamlessly blending aesthetics and functionality, we create intuitive interfaces that captivate users and elevate your brand's online presence. Welcome to innovation.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Transform your online presence with our exceptional web design services. We craft visually stunning websites that are both user-friendly and highly functional, delivering a seamless and captivating online experience for visitors.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Revolutionize user interaction with our app design expertise. Elevate functionality and aesthetics, creating immersive experiences. From intuitive navigation to stunning visuals, we craft apps that leave a lasting impression.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills