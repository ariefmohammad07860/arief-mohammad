import React from 'react';

const ProjectCard = ({ title, description, responsibilities, duration }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p><strong>Duration:</strong> {duration}</p>
      <p>{description}</p>
      <ul>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
