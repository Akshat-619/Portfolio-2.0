import React from "react";
import "./skills.css";

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript",
    "React.js", "Node.js", "Express.js", "MongoDB",
    "Git & GitHub", "Responsive Design"
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
