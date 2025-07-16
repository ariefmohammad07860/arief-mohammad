import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "NYC-Shift Scheduling",
    description: "Web application for scheduling nurses and managing leave requests.",
    responsibilities: [
      "Enhanced features and fixed bugs using React.js and Node.js",
      "Wrote SQL queries in SQL Server for reports and schedule tracking",
      "Participated in CI/CD activities using GitHub pipelines",
      "Deployed and monitored builds in GCP environments"
    ],
    duration: "Aug 2022 - Jun 2025"
  },
  {
    title: "NYC - BOI (Bureau of Immunization)",
    description: "Appointment scheduling system for immunization at NYC's Fort Greene Clinic.",
    responsibilities: [
      "Worked on UI enhancements and form validations in React.js",
      "Handled booking logic updates in Node.js backend",
      "Optimized SQL Server queries for availability checks",
      "Assisted with Twilio integration for appointment reminders"
    ],
    duration: "Aug 2024 - Jun 2025"
  },
  // Add other projects similarly
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;
