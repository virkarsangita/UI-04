import React from "react";
import "./Skills.css";
import Header from "../../Commpontes/Header/Header";

function Skills() {
  const skillsList = [
    { name: "HTML5", level: "90%" },
    { name: "CSS3", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React JS", level: "75%" },
    { name: "Bootstrap", level: "85%" },
    { name: "Git & GitHub", level: "70%" },
  ];

  return <>
    <Header/>
    <div className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
}

export default Skills;