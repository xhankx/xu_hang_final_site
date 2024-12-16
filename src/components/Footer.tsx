import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section left-content">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:hxu7@academic.rrc.ca">hxu7@academic.rrc.ca</a></p>
        </div>
        <div className="footer-section center-content">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section right-content">
          <p>© {new Date().getFullYear()} Made by Hank Xu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
