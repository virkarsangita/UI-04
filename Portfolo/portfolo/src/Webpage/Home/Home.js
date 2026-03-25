import React from 'react';
import './Home.css';
import backgroundImage from '../../Asscets/Img/background.jpg' ; // your uploaded image path
import Header from '../../Commpontes/Header/Header';

function Home() {
  return<>
  <Header/>
  <div className='container-fluid'>
      <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <div className="home-content">
          <h1>Hi, I'm <span className="name-highlight">Sangita Virkar</span></h1>
          <p>Frontend Developer | React Enthusiast </p>
          <div className="home-buttons">
            <a href="#projects" className="btn">My Work</a>
            <a href="#contact" className="btn btn-outline" >Contact Me</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
}

export default Home;