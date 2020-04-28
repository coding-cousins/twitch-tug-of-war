import React from "react";
import { FaGithub, FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <p>Developed by Danny Hogan | </p>
      <div className="icons">
        <FaGithub />
        <FaLinkedin />
        <FaTwitch />
        <FaTwitter />
      </div>
    </footer>
  );
};

export default Footer;
