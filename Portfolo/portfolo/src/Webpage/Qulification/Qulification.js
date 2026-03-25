import React from "react";
import './Qulification.css';
import Header from "../../Commpontes/Header/Header";

function Qualification() {
  const educationData = [
    {
      degree: "Bachelor of Engineering (Information Technology)",
      college: "Dr. Vithalrao Vikhe Patil College of Engineering, Ahilyanagar",
      duration: "2021 – 2025",
      score: "CGPA: 8.5",
    },
    {
      degree: "HSC (12th)",
      college: "Maharashtra Junior College",
      duration: "2020 – 2021",
      score: "64.78%",
    },
    {
      degree: "SSC (10th)",
      college: "Shri Samrath Vidya Mandir Prashala",
      duration: "2018 – 2019",
      score: "58.99%",
    },
  ];

  return<>
  <Header/>
    <div className="qualification-section" id="qualification">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {educationData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="duration">{item.duration}</span>
                <h3>{item.degree}</h3>
                <p className="college-name">{item.college}</p>
                {item.score && <span className="score-badge">{item.score}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
}

export default Qualification;