import React from 'react';
import './About.css'; 
import profileImage from '../../Asscets/Img/profileImage.jpg';
import Header from '../../Commpontes/Header/Header';

function About() {
  return (
    <>
      <Header />
      

        {/* About Me Section */}
        <div className='container-fluid'>
        <div className='about-section'>
          <div className='about-container'>
            <div className='about-image'>
              <img src={profileImage} alt='Sangita Virkar' style={{height:'200px' , width:'200px'}} />
            </div>
            <div className='about-content'>
              <h2>About Me</h2>
              <p>
                I am a passionate Frontend Developer with hands-on experience in building responsive and
                interactive web applications using React, JavaScript, and modern CSS. I enjoy turning
                designs into pixel-perfect websites and constantly learning new technologies to improve
                user experiences.
              </p>
              <p>
                Apart from coding, I love exploring UI/UX trends, contributing to open-source projects,
                and enhancing my problem-solving skills.
              </p>
            </div>
          </div>
        </div>
        </div>
      
    </>
  );
}

export default About;