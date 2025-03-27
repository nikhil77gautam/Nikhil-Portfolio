import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import ProjectBox from "./ProjectBox";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import cinemaentertainmentimage from "../Images/cinemaentertainment.jpg";
import contactformimage from "../Images/contactform.jpg";
import yournotesapplicationimage from "../Images/yournotesapplication.jpg";
import quotegeneratorimage from "../Images/quotegenerator.jpg";
import internportfolioimage from "../Images/intern-portfolio.png";
import weatherimageimage from "../Images/weather-image.png";
import hradmindashboardimage from "../Images/HR-Admin Dashboard.png";
import mahakumbhimage from "../Images/MahaKumbh.png";
import ecommerceimage from "../Images/e-commerce.png";

const Projects = () => {
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

    const floatingAnimationBox = gsap.to(".floatingBox", {
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

    document.querySelectorAll(".floatingBox").forEach((element) => {
      element.addEventListener("mouseover", () => floatingAnimationBox.pause());
      element.addEventListener("mouseout", () => floatingAnimationBox.play());
    });

    floatingAnimationText.play();
    floatingAnimationBox.play();

    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollPage = () => {
    if (isScrolledDown) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div>
      <h1 className="projectHeading floatingText">
        My <b>Projects :</b>
      </h1>
      <div className="project">
        <ProjectBox
          className="floatingBox"
          projectImage={ecommerceimage}
          projectName="E-Commerce Website"
          DescriptionProject="A full-fledged e-commerce website where users can browse a wide range of products, add them to their cart, and seamlessly complete their purchase. The platform will provide a real-time shopping experience, ensuring a smooth and immersive journey that makes online shopping feel just like a real in-store experience. Users can explore product categories, read detailed descriptions and a hassle-free shopping experience."
          GithubProject="https://github.com/nikhil77gautam/E-Commerce-Frontend.git"
          DemoWebsite="https://e-commerce-frontend-psi-blush.vercel.app"
        />
        <ProjectBox
          className="floatingBox"
          projectImage={mahakumbhimage}
          projectName="MAHA KUMBH INDIA"
          DescriptionProject="A tourism website for Maha Kumbh Mela visitors, offering essential guides, hotel bookings, and pilgrimage details.The platform features an inquiry section where visitors can fill out a form or contact the provided phone number for assistance. With a user-friendly interface, it ensures seamless navigation and enriching for pilgrims seeking a spiritual and hassle-free experience."
          GithubProject="https://github.com/nikhil77gautam/MahaKumbh-India2025.git"
          DemoWebsite=""
        />
        <ProjectBox
          className="floatingBox"
          projectImage={yournotesapplicationimage}
          projectName="Your Notes Application"
          DescriptionProject="This website offers a seamless experience where you can easily sign up and log in using a verified email account. Once logged in, you can conveniently 'Add Your Daily Notes' to keep track of important tasks, thoughts, and reminders. The platform allows you to edit, update, and delete notes as needed, ensuring an organized and efficient note-taking experience. With a user-friendly interface and secure data storage, you can access your notes anytime from any device, making it an essential tool for productivity."
          GithubProject="https://github.com/nikhil77gautam/Todo-Frontend.git"
          DemoWebsite="https://todo-frontend-sandy-nu.vercel.app/"
        />
        <ProjectBox
          className="floatingBox"
          projectImage={contactformimage}
          projectName="Contact Form"
          DescriptionProject="This website features a contact form that enables you to connect with others through your email account, allowing you to send messages directly to their email addresses. You can easily reach out by composing a message, and once submitted, it will be delivered to the recipient’s email inbox instantly. Please note that while you can send emails through this platform, additional features like email tracking are not available."
          GithubProject="https://github.com/nikhil77gautam/Mentorkart.git"
          DemoWebsite=""
        />
        <ProjectBox
          className="floatingBox"
          projectImage={hradmindashboardimage}
          projectName="HR-Admin Dashboard Website"
          DescriptionProject="HR and Admin can manage their activities, track users, and approve or reject applicants. The dashboard provides an intuitive interface where administrators can handle employee records, review applications, and oversee various management tasks efficiently. Please note that while user tracking and approval features are available, additional automation tools for HR processes may not be included."
          GithubProject="https://github.com/nikhil77gautam/HR-Admin-Dashboard.git"
          DemoWebsite="https://hr-admin-frontend-8kqf.vercel.app/"
        />
        <ProjectBox
          className="floatingBox"
          projectImage={cinemaentertainmentimage}
          projectName="Cinema Entertainment"
          DescriptionProject="You can explore your favorite movies on this website by searching for them and tapping to view detailed information, including cast, genre, and ratings. The platform allows you to discover trending films, read summaries, and access key details to help you decide what to watch next. Please note that while you can find and learn about movies here, playback functionality is not available."
          GithubProject="https://github.com/nikhil77gautam/Cinema-Entertainment-.git"
          DemoWebsite="https://cinema-entertainment.vercel.app/"
        />
        <ProjectBox
          projectImage={quotegeneratorimage}
          projectName="Quote Generator"
          DescriptionProject="Explore this website to discover randomly generated quotes that are sure to inspire and motivate you."
          GithubProject="https://github.com/nikhil77gautam/Mentorkart.git"
          DemoWebsite=""
        />
        <ProjectBox
          className="floatingBox"
          projectImage={internportfolioimage}
          projectName="Portfolio Website"
          DescriptionProject="Explore our completed projects on this portfolio website and reach out via our contact or mailing details."
          GithubProject="https://github.com/nikhil77gautam/Portfolio-Website-Page.git"
          DemoWebsite=""
        />
        <ProjectBox
          className="floatingBox"
          projectImage={weatherimageimage}
          projectName="Live Weather Forecast Website"
          DescriptionProject="On this weather website, you can check live weather updates for any location you want."
          GithubProject="https://github.com/nikhil77gautam/Weather-Application-Website.git"
          DemoWebsite=""
        />
      </div>
      <div className="scroll-arrow" onClick={scrollPage}>
        {isScrolledDown ? <FaArrowUp /> : <FaArrowDown />}
      </div>
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

export default Projects;
