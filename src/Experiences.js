import React from 'react';
import './Experience.css'; 

function Experience({ exp, link, eng }) {
  return (
    <div className="experience-container">
      <p className="experience-text">{exp}</p>
      <a href={link} className="experience-link">link: {eng}</a>
    </div>
  );
}

export default Experience;
