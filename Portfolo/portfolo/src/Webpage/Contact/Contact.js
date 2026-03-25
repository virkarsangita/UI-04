import React from 'react';
import './Contact.css';
import Header from "../../Commpontes/Header/Header";

function Contact() {
  return <>
      <Header />
      <div className="contact-section">
        <div className="contact-container">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>Feel free to reach out for any opportunities or collaboration. I am always open to discussing new projects!</p>
            
            <div className="info-details">
              <div className="info-item">
                <strong>Email:</strong>
                <span>sangitavirkar2205@gmail.com</span>
              </div>
              <div className="info-item">
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/sangita-virkar-6865a93b7" target="_blank" rel="noreferrer">https://www.linkedin.com/in/sangita-virkar-6865a93b7</a>
              </div>
              <div className="info-item">
                <strong>GitHub:</strong>
                <a href="https://github.com/virkarsangita/portfolio.git" target="_blank" rel="noreferrer">https://github.com/virkarsangita/portfolio.git</a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  
}

export default Contact;