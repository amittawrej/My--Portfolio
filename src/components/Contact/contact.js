import React, { useRef } from 'react';
import './contact.css';
import Digitronics from '../../images/digitronics1.png'
import Ubisoft from '../../images/ubisoft1.png'
import TechMahindra from '../../images/techmahindra1.png'
import FacebookIcon from '../../images/facebook-icon.png'
import InstagramIcon from '../../images/instagram.png'
import YouTubeIcon from '../../images/youtube.png'
import TwitterIcon from '../../images/twitter.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zfdzjbe', 'template_0pc82c7', form.current, '7u84s-IKx13FZQJmJ')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Send')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div className="clients">
        <h1 className="contactPageTitle">My Client</h1>
        <p className="clientDesc">
        I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have collaborated with includes
        </p>
        <div className="clientImgs">
            <img src={Digitronics} alt="Client" className="clientImg" />
            <img src={Ubisoft} alt="Client" className="clientImg" />
            <img src={TechMahindra} alt="Client" className="clientImg" />
        </div>
        </div>

        <div className="contact">
          <h2 className='contactPageTitle'>Contact Me</h2>
          <span className="contactDesc">Please fill the form below to discuss any work opportunities </span>

          <form className="contactForm" ref={form} onSubmit={sendEmail} >
            <input type="text" className="name" placeholder='Your Name' name="user_name"/>
            <input type="email" className="email" placeholder='Your Email' name="user_email"/>
            <textarea name="message" rows='5' placeholder='Your Massage' className="msg"></textarea>  
            <button type="submit"  className="submitBtn" value="Send">Submit</button>

            <div className="links">
              <img src={FacebookIcon} alt="FacebookIcon" className="link"/>
              <img src={TwitterIcon} alt="TwitterIcon" className="link" />
              <img src={YouTubeIcon} alt="YouTubeIcon" className="link" />
              <img src={InstagramIcon} alt="InstagramIcon" className="link" />
            </div>

          </form>
        </div>
    </section>
  );
};

export default Contact