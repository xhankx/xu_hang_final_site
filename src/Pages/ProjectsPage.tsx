import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import PageWithChildren from "../Components/PageWithChildren";
import ProjectCard from "../Components/ProjectCard";

const projectsData = [
  {
    icon: faGithub,
    title: "Portfolio Website",
    link: "https://github.com/supriya-thukral/supriya-thukral.github.io",
    description:
      "I built my personal website using HTML5, CSS3, and JavaScript for a clean and modern design, with SCSS for responsive styling. Using React, I created reusable components for a dynamic experience, enhanced by React Bootstrap, Material UI, and Font Awesome. The site is deployed on GitHub Pages with an automated deployment pipeline.",
  },
  {
    icon: faLaptopCode,
    title: "WEBD-1008 Portfolio Website",
    link: "http://hankxu.liveblog365.com/index.html",
    description:
      "I built this project using HTML5, CSS, and JavaScript to ensure a responsive, accessible, and user-friendly design. Inline validation for forms was implemented using JavaScript and Regular Expressions, while a common header, navigation bar, and footer across all pages provide a cohesive and professional layout. The website is fully hosted online using free web hosting services, making it accessible on the World Wide Web.",
  },
  {
    icon: faCodeBranch,
    title: "Open Source Website Portfolio Template",
    link: "https://github.com/example",
    description:
      "This project is an open-source website portfolio template that allows users to easily create their own portfolio websites. It is a work-in-progress (WIP) and is built using React, TypeScript, and SCSS. The goal of this project is to provide developers with a customizable and modern template to showcase their skills and projects.",
    badge: "WIP",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <PageWithChildren id="projects" className="projects">
      <h1>Projects</h1>
      <section>
        <div className="projects-container">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              icon={project.icon}
              title={project.title}
              link={project.link}
              description={project.description}
              badge={project.badge}
            />
          ))}
        </div>
      </section>
    </PageWithChildren>
  );
};

export default ProjectsPage;
