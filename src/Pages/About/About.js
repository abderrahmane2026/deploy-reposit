// src/AboutUs.js

import React from 'react';
import './About.css';
 import teamPhoto from '../../assetes/picturs/About us page-rafiki.png'; // example image
 import missionPhoto from '../../assetes/picturs/About us page-rafiki.png'; // example image

const About = () => {
  return (
    <div className="about-us">
      <section className="about-us__intro">
        <h1>About Us</h1>
        <p>Welcome to our e-commerce website. We are dedicated to providing you with the best products and services.</p>
      </section>
      <section className="about-us__content">
        <div className="about-us__image">
          <img src={teamPhoto} alt="Our Team" />
        </div>
        <div className="about-us__text">
          <h2>Our Team</h2>
          <p>We have a passionate and dedicated team working hard to meet your needs.</p>
        </div>
      </section>
      <section className="about-us__content">
        <div className="about-us__text">
          <h2>Our Mission</h2>
          <p>Our mission is to deliver high-quality products that bring value and satisfaction to our customers.</p>
        </div>
        <div className="about-us__image">
          <img src={missionPhoto} alt="Our Mission" />
        </div>
      </section>
    </div>
  );
};

export default About;
