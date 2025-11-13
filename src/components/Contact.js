import React from 'react'; 
import './Contact.css';

function Contact() {
  return (
    <div className="container contact-container">
      <h2>Contact Me</h2>
      <p>
        I'm always open to discussing new projects or opportunities. Feel free to
        reach out!
      </p>
      <a href="mailto:madesmadelyn@gmail.com" className="btn">
        Email Me
      </a>
      <div className="social-links">
        <a 
          href="https://github.com/dynlei" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;