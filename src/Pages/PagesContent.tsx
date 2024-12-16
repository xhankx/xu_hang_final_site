import ContactPage from './ContactPage';
import ExperiencePage from './ExperiencePage';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import SkillsPage from './SkillsPage';
import React from 'react';


export const pagesContent: {
  [key: string]: {
    title: string;
    href: string;
    component?: React.FC;
  };
} = {
  home: {
    title: 'Home',
    href: 'home',
    component: HomePage,
  },
  experience: {
    title: 'Experience',
    href: 'experience',
    component: ExperiencePage,
  },
  skills: {
    title: 'Skills',
    href: 'skills',
    component: SkillsPage,
  },
  projects: {
    title: 'Projects',
    href: 'projects',
    component: ProjectsPage,
  },
  contact: {
    title: 'Contact',
    href: 'contact',
    component: ContactPage,
  },
};
