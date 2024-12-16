import React from 'react';
import headshot from '../Assets/Images/hankxu.png';
import CardComponent from '../Components/CardRow';
import { ImageProps } from '../Components/Page';
import PageWithChildren from '../Components/PageWithChildren';
import useWindowSize from '../helpers';

const HomePage: React.FC = () => {
  // Props for the headshot image
  const headshotProps: ImageProps = {
    src: headshot,
    alt: 'Headshot',
    className: 'round-image',
  };

  // Get the window size using a custom hook
  const windowSize = useWindowSize() || { width: 0, height: 0 };

  return (
    <PageWithChildren id="home">
      {/* CardComponent represents the main section of the homepage */}
      <CardComponent
        title="Welcome to My Portfolio"
        image={headshotProps}
        imageLocation={windowSize.width <= 768 ? 'left' : 'right'}
      >
        {/* Content inside the CardComponent */}
        <div>
          <p>
            Hi, I'm Hank Xu – a passionate full-stack web development student at
            Red River College. I specialize in creating modern, intuitive, and
            engaging tech websites and digital products.
          </p>
          <p>
            Since 2023, I’ve dedicated myself to turning complex technical
            challenges into beautifully crafted solutions. I thrive on designing
            sleek, user-friendly interfaces while focusing on functionality and
            performance.
          </p>
          <p>
            Feel free to explore my work and get in touch if you'd like to chat
            about tech, design, or life in general.
          </p>
        </div>
      </CardComponent>
    </PageWithChildren>
  );
};

export default HomePage;
