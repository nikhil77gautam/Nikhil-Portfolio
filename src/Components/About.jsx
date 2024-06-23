import React, { useEffect } from "react";
import { gsap } from "gsap";
import Skills from "./Skills";
import coder from "../Images/coder.jpg";

const About = () => {
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
  }, []);

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
            <br />I completed an internship training program as a{" "}
            <b> MERN Stack Developer</b> from MentorKart. I enjoy creating
            original projects with beautiful designs. You can check out some of
            my work in the projects section.
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
      </div>
    </>
  );
};

export default About;
