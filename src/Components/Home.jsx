import React from "react";
import Typed from "./Typed";
import Tilt from "react-parallax-tilt";
import spaceboy from "../Images/spaceboy.jpg";
import avatarboy from "../Images/avatarboy.jpg";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>NIKHIL GAUTAM</b>
          </h1>
          <br />
          <h2>
            <b>A Passionate MERN- Full Stack Developer From India.</b>
          </h2>
          <Typed />
        </div>

        <img className="spaceboy" src={spaceboy} alt="Spaceboy.jpg" />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            Hi, I'm Nikhil Gautam, hailing from the vibrant city of Indore in
            Madhya Pradesh, India. I'm passionate about the transformative
            process of turning ideas into impactful websites. I thrive on
            challenges that push me as a developer and lead to work I can truly
            be proud of.
            <br />
            <br />
            My expertise lies in{" "}
            <b>HTML, CSS, JavaScript, React, Node.js, and MongoDB,</b> with a
            sprinkling of <b>Python knowledge.</b> Currently, I'm immersed in
            various projects within the <b>MERN Stack,</b> constantly honing my
            skills and exploring new possibilities.
            <br />
            Looking ahead, I'm eager to delve into <b> Next.js </b>,{" "}
            <b>Three.js</b> and
            <b> Typescript </b> to broaden my skill set further. <br />
            <br />
            Oh, and did I mention, I absolutely adore <b>coffee</b>{" "}
            <CiCoffeeCup />
          </p>
        </div>
        <Tilt>
          <img className="avatarboy" src={avatarboy} alt="Avatarboy.jpg" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
