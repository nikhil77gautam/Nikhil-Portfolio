import React from "react";
import ProjectBox from "./ProjectBox";
import cinemaentertainmentimage from "../Images/cinemaentertainment.jpg";
import contactformimage from "../Images/contactform.jpg";
import yournotesapplicationimage from "../Images/yournotesapplication.jpg";
import quotegeneratorimage from "../Images/quotegenerator.jpg";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects :</b>
      </h1>
      <div className="project">
        <ProjectBox
          projectImage={cinemaentertainmentimage}
          projectName="Cinema Entertainment"
          // projectDescription
        />
        <ProjectBox
          projectImage={contactformimage}
          projectName="Contact Form"
        />
        <ProjectBox
          projectImage={yournotesapplicationimage}
          projectName="Your Notes Application"
        />
        <ProjectBox
          projectImage={quotegeneratorimage}
          projectName="Quote Generator"
        />
      </div>
    </div>
  );
};

export default Projects;
