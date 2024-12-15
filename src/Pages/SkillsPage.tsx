import {
  faJs,
  faPython,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCodeBranch,
  faDatabase,
  faFileCode,
  faPalette,
  faServer,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PageWithChildren from "../Components/PageWithChildren";

const SkillItem: React.FC<{ icon: any; text: string }> = ({ icon, text }) => {
  return (
    <div className="skills-item">
      <FontAwesomeIcon className="fa-icon" icon={icon} /> {text}
    </div>
  );
};

const SkillsGrid: React.FC<{ skills: { icon: any; text: string }[] }> = ({
  skills,
}) => {
  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <SkillItem key={skill.text} icon={skill.icon} text={skill.text} />
      ))}
    </div>
  );
};

const SkillsPage: React.FC = () => {
  const frontEndSkills = [
    { icon: faReact, text: "React" },
    { icon: faJs, text: "JavaScript" },
    { icon: faFileCode, text: "TypeScript" },
    { icon: faCodeBranch, text: "Redux" },
    { icon: faSass, text: "SCSS" },
    { icon: faPalette, text: "Material UI" },
    { icon: faVial, text: "Jest" },
  ];

  const backEndSkills = [
    { icon: faPython, text: "Python" },
    { icon: faServer, text: "Django" },
    { icon: faDatabase, text: "SQL" },
    { icon: faDatabase, text: "Postgres" },
  ];

  return (
    <PageWithChildren id="skills" className="skills">
      <h1>Skills</h1>

      <div className="skills-section">
        <h4>Front-End Development</h4>
        <SkillsGrid skills={frontEndSkills} />
      </div>
      <div className="skills-section">
        <h4>Back-End Development</h4>
        <SkillsGrid skills={backEndSkills} />
      </div>
    </PageWithChildren>
  );
};

export default SkillsPage;
