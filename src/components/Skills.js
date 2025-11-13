import React from 'react';
import './Skills.css';

const mySkills = [
  'React',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'Responsive Design',
  'Git & GitHub',
  'Node.js',
  'Firebase',
  'PHP',
];

function Skills() {
  return (
    <div className="container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {mySkills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;