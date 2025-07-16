import React from 'react';
import '../styles/main.css'; // Ensure you have this CSS file for styling

const Footer = () => {
  return (
    <footer id="contact" className="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Mobile: +91-7396337187</p>
          <p>Email: ariefmohammad07860@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            <a href="https://linkedin.com/in/arief-mohammad" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {/* Add other social media links as needed */}
          </div>
        </div>
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} Arief Mohammad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
