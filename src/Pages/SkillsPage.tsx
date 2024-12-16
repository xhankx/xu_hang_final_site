import {
  faCss,
  faHtml5,
  faJava,
  faJs,
  faPython,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import {
  faC,
  faCartPlus,
  faDatabase,
  faFileCode,
  faPalette,
  faVial,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PageWithChildren from '../components/PageWithChildren';

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
    { icon: faHtml5, text: 'Html' },
    { icon: faCss, text: 'Css' },
    { icon: faReact, text: 'React' },
    { icon: faJs, text: 'JavaScript' },
    { icon: faFileCode, text: 'TypeScript' },
    { icon: faSass, text: 'SCSS' },
    { icon: faPalette, text: 'Material UI' },
    { icon: faVial, text: 'Jest' },
  ];

  const backEndSkills = [
    { icon: faPython, text: 'Python' },
    { icon: faJava, text: 'Java' },
    { icon: faC, text: 'C' },
    { icon: faCartPlus, text: 'C++' },
    { icon: faDatabase, text: 'SQL' },
    { icon: faDatabase, text: 'Postgres' },
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
