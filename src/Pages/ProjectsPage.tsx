import React from 'react';
import { Card, Label } from 'xu_hang_ui_garden_build_checks';

const ProjectsPage = () => (
  <div>
    <Label text="My Projects" />
    <Card
      title="React Component Library"
      description="Built reusable components with Storybook."
      imageUrl="https://via.placeholder.com/200"
    />
    <Card
      title="Dockerized Portfolio"
      description="Deployed portfolio website using Docker."
      imageUrl="https://via.placeholder.com/200"
    />
  </div>
);

export default ProjectsPage;
