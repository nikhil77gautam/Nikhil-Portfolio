import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Dedicated to creating impactful solutions!</h4>
      <div className="footerLinks">
        <a href="https://github.com/nikhil77gautam" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil-gautam-69153b20a"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="gmail to:nikhil77.gautam@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
