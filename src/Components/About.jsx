import React from "react";
import Skills from "./Skills";
import coder from "../Images/coder.jpg";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
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
            <a href="https://www.instagram.com/nikhil77.gautam" target="_blank">
              Instagram.
            </a>
            <br />
            <br />
            <b>Feel free to connect with me, links are in the below.</b>
          </p>
        </div>

        <div>
          <div>
            <img
              style={{ width: "650px", height: "650px" }}
              src={coder}
              alt="Coder"
            />
          </div>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skills :</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="JAVASCRIPT" />
        <Skills skill="REACT.JS" />
        <Skills skill="NODE.JS" />
        <Skills skill="EXPRESS" />
        <Skills skill="MONGODB" />
        <Skills skill="GITHUB" />
        <Skills skill="BOOTSTRAP" />
      </div>
    </>
  );
};

export default About;
