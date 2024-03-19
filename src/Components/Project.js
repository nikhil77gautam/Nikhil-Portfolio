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
          DescriptionProject="You can explore your favorite movies on this website by searching for them and tapping to view detailed information. Please note that while you can find and learn about movies here, playback functionality is not available."
          Githubproject="https://github.com/nikhil77gautam/Cinema-Entertainment-.git"
          Demowebsite="https://cinema-entertainment.vercel.app/"
        />
        <ProjectBox
          projectImage={contactformimage}
          projectName="Contact Form"
          DescriptionProject="This website features a contact form that enables you to connect with others through your email account, allowing you to send messages directly to their email addresses. Similar to Gmail, this form supports one-way communication, meaning only one person can send a message to another. However, if both parties have access to the website link, they can exchange messages with each other's email accounts."
          GithubProject="https://github.com/nikhil77gautam/Mentorkart.git"
          DemoWebsite=""
        />
        <ProjectBox
          projectImage={yournotesapplicationimage}
          projectName="Your Notes Application"
          DescriptionProject="This website offers a seamless experience where you can easily sign up and log in using a verified email account. Once logged in, you can conveniently 'Add Your Daily Notes'. The website is fully responsive, ensuring a smooth user experience across devices. Additionally, I have learned how to host my projects on Github and deploy them using Vercel pages."
          GithubProject="https://github.com/nikhil77gautam/Todo-Frontend.git"
          DemoWebsite="https://todo-frontend-sandy-nu.vercel.app/"
        />
        <ProjectBox
          projectImage={quotegeneratorimage}
          projectName="Quote Generator"
          DescriptionProject="Explore this website to discover randomly generated quotes that are sure to inspire and motivate you."
          GithubProject="https://github.com/nikhil77gautam/Mentorkart.git"
          DemoWebsite=""
        />
      </div>
    </div>
  );
};

export default Projects;
