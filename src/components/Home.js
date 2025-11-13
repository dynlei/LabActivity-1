import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Hi, I'm Madelyn Mades</h1>
      <p className="subtitle">
       My name is Madelyn Mades, a student in Application Development with a passion for designing 
       and developing professional, responsive, and visually engaging web applications.
      </p>
      <a href="#projects" className="btn">
        View My Projects
      </a>
    </div>
  );
}

export default Home;