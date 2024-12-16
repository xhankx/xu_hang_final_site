import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';

/**
 * ProjectCard Component
 * This component renders a project card with an icon, title, link, description, and an optional badge.
 * @param {IconProp} icon - The FontAwesome icon to display in the card header.
 * @param {string} title - The title of the project.
 * @param {string} link - The link to the project.
 * @param {string} description - The description of the project.
 * @param {string} badge - (Optional) The badge content to display in the card header.
 * @returns {React.FC} ProjectCard component
 */
interface ProjectCardProps {
  icon: IconProp;
  title: string;
  link: string;
  description: string;
  badge?: string;
}

const boldKeywords = [
  'React',
  'TypeScript',
  'SCSS',
  'Node.js',
  'GitHub',
  'HTML',
  'CSS',
  'JavaScript',
  'Web App',
  'Open Source',
  'MVC',
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  icon,
  title,
  link,
  description,
  badge,
}) => {
  // Function to bold specific keywords in the description
  const boldDescription = () => {
    const words = description.split(' ');
    return words.map((word, index) => {
      const isKeyword = boldKeywords.some((keyword) =>
        word.toLowerCase().includes(keyword.toLowerCase()),
      );
      return isKeyword ? (
        <b key={index}>{word} </b> // Add a unique key for bold words
      ) : (
        <React.Fragment key={index}>{word} </React.Fragment> // Ensure all elements have a key
      );
    });
  };

  return (
    <Card className="project custom-card-width">
      <CardHeader
        title={
          <div className="header-content">
            {/* Icon */}
            <FontAwesomeIcon icon={icon} />

            {/* Title and Badge */}
            <div className="title-wrapper">
              <span className="title">
                {title}
                {/* Optional Badge */}
                {badge && (
                  <Badge
                    color="primary"
                    className="badge"
                    badgeContent={badge}
                  ></Badge>
                )}
              </span>

              {/* Link to Project */}
              <a href={link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} className="fa-link" />
              </a>
            </div>
          </div>
        }
      />

      {/* Bolded Description */}
      <CardContent>{boldDescription()}</CardContent>
    </Card>
  );
};

export default ProjectCard;
