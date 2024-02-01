import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Digitronics from '../../images/digitronics1.png';
import Ubisoft from '../../images/ubisoft1.png';
import TechMahindra from '../../images/techmahindra1.png';
import FacebookIcon from '../../images/facebook-icon.png';
import InstagramIcon from '../../images/instagram.png';
import YouTubeIcon from '../../images/youtube.png';
import TwitterIcon from '../../images/twitter.png';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form data
    const name = form.current['user_name'].value.trim();
    const email = form.current['user_email'].value.trim();
    const message = form.current['message'].value.trim();

    if (!name || !email || !message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm('service_zfdzjbe', 'template_0pc82c7', form.current, '7u84s-IKx13FZQJmJ')
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setSuccessMessage('Email sent successfully!');
        })
        .catch((error) => {
          console.log(error.text);
          setErrorMessage('Error sending email. Please try again later.');
        })
      
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contactPage">
      <div className="clients">
        <h1 className="contactPageTitle">My Client</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have collaborated with include
        </p>
        <div className="clientImgs">
          <img src={Digitronics} alt="Client" className="clientImg" />
          <img src={Ubisoft} alt="Client" className="clientImg" />
          <img src={TechMahindra} alt="Client" className="clientImg" />
        </div>
      </div>

      <div className="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <span className="contactDesc">Please fill the form below to discuss any work opportunities </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="user_name" />
          <input type="email" className="email" placeholder="Your Email" name="user_email" />
          <textarea name="message" rows="5" placeholder="Your Message" className="msg"></textarea>
          <button type="submit" className="submitBtn" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        {successMessage && <p className="successMessage">{successMessage}</p>}

        <div className="links">
          <img src={FacebookIcon} alt="FacebookIcon" className="link" />
          <img src={TwitterIcon} alt="TwitterIcon" className="link" />
          <img src={YouTubeIcon} alt="YouTubeIcon" className="link" />
          <img src={InstagramIcon} alt="InstagramIcon" className="link" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
