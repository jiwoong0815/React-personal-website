import heroimg from './images/logo512.png' //where to change my image
import linkedin from './images/linkedinIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="profile-section">
        <div className="profile-image">
          <img src={heroimg} alt="Your Profile" />
        </div>
        <h2>Jiwoong Choi</h2>
        <p>Software Engineering student in Montreal</p>
        <div className="social-links">
          <a href="https://github.com/jiwoong0815" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} style={{color :'#fff' , fontSize:'20px'}}/>
          </a>
          <a href="https://www.linkedin.com/in/jiwoong-choi03/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#fff', fontSize: '20px' }} />
          </a>
        </div>
      </div>
      <div className="content-section">
        <p className="intro-text">Hello There!</p>
        <h1>
          My name is Jiwoong Choi! 
          <br/>a Software Engineering Student in Mcgill university!
        </h1>
        <p className="status">
          <span className="status-indicator"></span> Available for internship opportunity
        </p>
        <button className="cta-button">Download CV</button>
      </div>
    </section>
  );
};

export default Hero;