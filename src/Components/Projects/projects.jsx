import React from "react";
import "./projects.css";

function Projects() {
  const projectList = [
    { title: "Portfolio Website", desc: "A personal portfolio built with React.js" },
    { title: "E-commerce Store", desc: "MERN-based e-commerce web app" },
    { title: "Blog Platform", desc: "Full-stack blog platform with authentication" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
