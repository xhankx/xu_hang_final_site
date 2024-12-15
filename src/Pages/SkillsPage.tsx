import React from 'react';
import { Label, Dropdown } from 'xu_hang_ui_garden_build_checks';

const SkillsPage = () => (
  <div>
    <Label text="Skills" />
    <Dropdown label="Languages" options={['React', 'TypeScript', 'Node.js']} />
    <Dropdown label="Tools" options={['Git', 'Docker', 'Storybook']} />
  </div>
);

export default SkillsPage;
