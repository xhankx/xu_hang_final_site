import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import workLogo from '../Assets/Images/work.png';
import CardComponent from '../Components/CardRow';
import { ImageProps } from '../Components/Page';
import PageWithChildren from '../Components/PageWithChildren';

const ExperiencePage: React.FC = () => {
  const workLogoProps: ImageProps = {
    src: workLogo,
    alt: 'Work logo',
    className: 'round-image',
  };
  return (
    <PageWithChildren className="experience" id="experience">
      <h1>Projects and Experience</h1>

      <CardComponent image={workLogoProps}>
        <h2>Xhank - Digital Solutions</h2>
        <h3>
          <a
            href="http://hankxu.liveblog365.com/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Xhank Digital Solutions</strong>
          </a>{' '}
          is a modern web development studio founded by Hank Xu, dedicated to
          designing clean, functional, and responsive digital experiences. We
          specialize in building intuitive websites and products that help
          businesses, individuals, and creators showcase their work and ideas
          effectively.
        </h3>
        <p>
          "At Xhank, we don’t just build websites – we create experiences that
          inspire, engage, and leave a lasting impact."
        </p>
      </CardComponent>
    </PageWithChildren>
  );
};

export default ExperiencePage;
