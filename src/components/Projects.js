import React from 'react';
import './Projects.css';

// Add your project data here
const projects = [
  {
    title: 'Project 1: Task Management App',
    description: 'A React-based task manager to organize daily tasks.',
    link: '#', // Link to live demo
    repo: '#', // Link to GitHub repo
  },
  {
    title: 'Project 2: E-commerce UI',
    description: 'The front-end UI for a tech gadget e-commerce store.',
    link: '#',
    repo: '#',
  },
  {
    title: 'Project 3: Personal Blog',
    description: 'A blog built with a framework and React.',
    link: '#',
    repo: '#',
  },
];

function Projects() {
  return (
    <div className="container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.repo} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;