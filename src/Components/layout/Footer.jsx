import React from "react";
import { FaFacebookSquare, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="foot-section">
      <div className="foot-container">
        <h3>MERN Stack Web Developer</h3>
        <br />
        <div className="footer-connect-icons">
          <h4>Connect with me:</h4>
          <ul>
            <li><FaFacebookSquare/></li>
            <li><FaYoutube/></li>
            <li><FaLinkedin/></li>
          </ul>
        </div>
        <p className="footer-quote">
          "Strive not to be a success, but rather to be of value." - Albert
          Einstein
        </p>
      </div>
      <p className="foot-copyright">&copy; 2024 Paras. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
