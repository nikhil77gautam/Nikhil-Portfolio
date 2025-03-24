import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from "./Typed";
import Tilt from "react-parallax-tilt";
import { CiCoffeeCup } from "react-icons/ci";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import spaceboy from "../Images/spaceboy.jpg";
import avatarboy from "../Images/avatarboy.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    gsap.from(".HomeText h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      stagger: 0.2,
    });

    gsap.from(".HomeText h2", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 1,
    });

    gsap.from(".spaceboy", {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 1.5,
    });

    gsap.from(".AboutTextHeading", {
      scrollTrigger: {
        trigger: ".AboutTextHeading",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });

    gsap.from(".AboutText p", {
      scrollTrigger: {
        trigger: ".AboutText p",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });

    gsap.from(".avatarboy", {
      scrollTrigger: {
        trigger: ".avatarboy",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -100,
      duration: 1,
    });

    const floatingAnimation = gsap.to(".floating", {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2,
      paused: true,
    });

    document.querySelectorAll(".floating").forEach((element) => {
      element.addEventListener("mouseover", () => floatingAnimation.pause());
      element.addEventListener("mouseout", () => floatingAnimation.play());
    });

    floatingAnimation.play();

    // Detect scroll position
    const handleScroll = () => {
      const aboutSection = document.querySelector(".AboutPage");
      const rect = aboutSection.getBoundingClientRect();
      setIsScrolledDown(rect.top < window.innerHeight / 2); // Set true when scrolled halfway down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll function
  const scrollPage = () => {
    if (isScrolledDown) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(".AboutPage").scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1 className="floating">Hi There!</h1>
          <h1 className="floating">
            I'M <b>NIKHIL GAUTAM</b>
          </h1>
          <br />
          <h2 className="floating">
            <b>A Passionate MERN- Full Stack Developer From India.</b>
          </h2>
          <Typed />
        </div>

        <img className="spaceboy" src={spaceboy} alt="Spaceboy.jpg" />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading floating">
            Brief <b>introduction</b>
          </h1>
          <p className="floating">
            Hi, I'm Nikhil Gautam, hailing from the vibrant city of Indore in
            Madhya Pradesh, India. I'm passionate about the transformative
            process of turning ideas into impactful websites. I thrive on
            challenges that push me as a developer and lead to work I can truly
            be proud of.
            <br />
            <br />
            My expertise lies in{" "}
            <b>
              HTML, CSS, JavaScript, React, Redux, React-Native(Basic), Node.js,
              Express.js and MongoDB,
            </b>{" "}
            with hands-on experience in various <b>MERN Stack</b> projects.
            Currently, I'm immersed in various projects within the{" "}
            <b>MERN Stack,</b> I'm continuously refining my skills and exploring
            new possibilities.
            <br />
            Looking ahead, I'm eager to expand my knowledge by diving into{" "}
            <b> Next.js </b>, <b>Three.js</b> and
            <b> Typescript </b> to further enhance my expertise. <br />
            <br />
            Oh, and did I mention? I have a deep appreciation for <b>
              coffee
            </b>{" "}
            <CiCoffeeCup />.
          </p>
        </div>
        <Tilt>
          <img className="avatarboy" src={avatarboy} alt="Avatarboy.jpg" />
        </Tilt>
      </div>

      {/* Up/Down arrow button */}
      <div className="scroll-arrow" onClick={scrollPage}>
        {isScrolledDown ? <FaArrowUp /> : <FaArrowDown />}
      </div>

      {/* Styling for the arrow */}
      <style>
        {`
          .scroll-arrow {
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

          .scroll-arrow:hover {
            background: rgba(0, 0, 0, 0.8);
          }
        `}
      </style>
    </div>
  );
};

export default Home;
