import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <p>
            Hello! I’m <span className="highlight">Madelyn Mades</span>, an Application Development student 
            with a strong passion for crafting dynamic and user-centered digital experiences. 
            I strive to apply my React expertise to develop a professional online portfolio 
            that is both functional and visually engaging.
          </p>
          <p>
            This portfolio showcases my skills, projects, and personal background. 
            I have hands-on experience with front-end technologies such as 
            <span className="highlight"> React</span>, <span className="highlight">HTML</span>, 
            <span className="highlight"> CSS</span>, <span className="highlight">JavaScript</span>, 
            and <span className="highlight">Bootstrap</span>, and I’m always eager to learn more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
