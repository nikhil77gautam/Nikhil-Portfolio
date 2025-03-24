import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Skills from "./Skills";
import coder from "../Images/coder.jpg";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const About = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const floatingAnimationText = gsap.to(".floatingText", {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2,
      paused: true,
    });

    const floatingAnimationSkills = gsap.to(".floatingSkill", {
      y: "+=10",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2,
      paused: true,
    });

    document.querySelectorAll(".floatingText").forEach((element) => {
      element.addEventListener("mouseover", () =>
        floatingAnimationText.pause()
      );
      element.addEventListener("mouseout", () => floatingAnimationText.play());
    });

    document.querySelectorAll(".floatingSkill").forEach((element) => {
      element.addEventListener("mouseover", () =>
        floatingAnimationSkills.pause()
      );
      element.addEventListener("mouseout", () =>
        floatingAnimationSkills.play()
      );
    });

    floatingAnimationText.play();
    floatingAnimationSkills.play();

    // Detect scroll position
    const handleScroll = () => {
      const aboutSection = document.querySelector(".AboutPage");
      const rect = aboutSection.getBoundingClientRect();
      setIsScrolledDown(rect.top < -100); // Change state when user scrolls down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll up/down
  const scrollPage = () => {
    if (isScrolledDown) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(".skills").scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading floatingText">
            Get to <b>know</b> me!
          </h1>
          <p className="floatingText">
            Hi, I'm <b>Nikhil Gautam</b> from Indore, Madhya Pradesh, India. I'm
            a <b>MERN Stack Web Developer</b> with a PG in <b> MBA(IT)</b>.{" "}
            <br />
            <br />I successfully completed a training program as a{" "}
            <b> MERN Stack Developer</b> at MentorKart and also worked as an
            on-roll intern at <b>VRadicals India Pvt. Ltd., Indore</b>. I have a
            passion for developing live projects with dynamic functionality and
            visually appealing designs.
            <br />
            <br />
            I'm <b>open</b> to new collaborations or work opportunities where I
            can contribute and grow.
            <br />
            Beside coding, I love traveling to new places and hitting the gym.
            You can check out some of my shots here{" "}
            <a
              href="https://www.instagram.com/nikhil77.gautam"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram.
            </a>
            <br />
            <br />
            <b>Feel free to connect with me, links are in the below.</b>
          </p>
        </div>

        <div>
          <img
            style={{ width: "650px", height: "650px" }}
            src={coder}
            alt="Coder"
          />
        </div>
      </div>

      <h1 className="SkillsHeading floatingText">Professional Skills :</h1>
      <div className="skills">
        <Skills className="floatingSkill" skill="HTML" />
        <Skills className="floatingSkill" skill="CSS" />
        <Skills className="floatingSkill" skill="JAVASCRIPT" />
        <Skills className="floatingSkill" skill="REACT.JS" />
        <Skills className="floatingSkill" skill="NODE.JS" />
        <Skills className="floatingSkill" skill="EXPRESS" />
        <Skills className="floatingSkill" skill="MONGODB" />
        <Skills className="floatingSkill" skill="GITHUB" />
        <Skills className="floatingSkill" skill="BOOTSTRAP" />
        <Skills className="floatingSkill" skill="REACT-NATIVE" />
      </div>

      {/* Up/Down arrow button */}
      <div className="down-arrow" onClick={scrollPage}>
        {isScrolledDown ? <FaArrowUp /> : <FaArrowDown />}
      </div>

      {/* Styling for the arrow */}
      <style>
        {`
          .down-arrow {
            position: fixed;
            right: 20px;
            bottom: 50%;
            transform: translateY(50%);
            font-size: 30px;
            cursor: pointer;
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
            padding: 10px;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .down-arrow:hover {
            background: rgba(0, 0, 0, 0.8);
          }
        `}
      </style>
    </>
  );
};

export default About;
