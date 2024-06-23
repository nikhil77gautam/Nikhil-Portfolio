import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({
  projectImage,
  projectName,
  DescriptionProject,
  Githubproject,
  Demowebsite,
}) => {
  const description = {
    YourNotesApplicationDescription:
      "On this website, you can sign up and log in via a verified email account. After logging in, you can 'Add Your Daily Notes'. It's a responsive website. I also learned how to host my project on Github and then deploy that project using Vercel pages.",
    YourNotesApplicationGithub:
      "https://github.com/nikhil77gautam/Todo-Frontend",
    YourNotesApplicationWebsite: "https://todo-frontend-sandy-nu.vercel.app/",

    ContactformDescription:
      "This website allows you to contact others via your email account and send any message to others' mail accounts. This contact form is similar to 'Gmail', but only one person can send a message to the other. If the other person also has this website link, then they both can send messages to each other's accounts.",
    ContactformGithub: "https://github.com/nikhil77gautam/Mentorkart",
    ContactformWebsite: "",

    QuoteGeneratorDescription:
      "On this website, you can search for random quotes generated randomly.",
    QuoteGeneratorGithub: "https://github.com/nikhil77gautam/Mentorkart",
    QuoteGeneratorWebsite: "",

    CinemaEntertainmentDescription:
      "On this website, you can search for your favorite movies and tap to see the movie's detailed information. However, you cannot play movies on this website; you can only search and find details here.",
    CinemaEntertainmentGithub:
      "https://github.com/nikhil77gautam/Cinema-Entertainment",
    CinemaEntertainmentWebsite: "https://cinema-entertainment.vercel.app/",
  };



  return (
    <div className="projectBox" style={{ maxWidth: "700px", margin: "10px" }}>
      <img
        className="projectImage"
        src={projectImage}
        alt="Project display"
        style={{ width: "360px", height: "auto" }}
      />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <h4>{DescriptionProject}</h4>
        <br />

        <a
          // style={{ display: show }}
          href={Githubproject}
          target="_blank"
          rel="noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={Demowebsite} target="_blank" rel="noreferrer">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
