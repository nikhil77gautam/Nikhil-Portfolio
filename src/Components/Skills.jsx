import React from "react";
import {
  FaReact,
  FaGithub,
  FaCss3,
  FaBootstrap,
  FaHtml5,
} from "react-icons/fa";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    BOOTSTRAP: <FaBootstrap />,
    
    "REACT.JS": <FaReact />,
    JAVASCRIPT: <DiJavascript1 />,
    "NODE.JS": <DiNodejs />,
    EXPRESS: <SiExpress />,
    MONGODB: <SiMongodb />,
    GITHUB: <FaGithub />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill] || null}
    </div>
  );
};

export default Skills;
