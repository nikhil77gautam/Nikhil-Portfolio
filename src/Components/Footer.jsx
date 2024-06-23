import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { gsap } from "gsap";

const Footer = () => {
  useEffect(() => {
    // Floating animation for footer links
    const floatingAnimation = gsap.to(".footerLinks a", {
      y: "+=10",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2,
    });

    // Add hover pause/resume for floating links
    document.querySelectorAll(".footerLinks a").forEach((element) => {
      element.addEventListener("mouseover", () => floatingAnimation.pause());
      element.addEventListener("mouseout", () => floatingAnimation.play());
    });
  }, []);

  return (
    <footer>
      <h4 className="floatingText">
        Dedicated to creating impactful solutions!
      </h4>
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
        <a href="mailto:nikhil77.gautam@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
