import React, { ReactNode } from 'react';
import { ImageProps } from './Page';
import { Card } from '@mui/material';

interface CardProps {
  title?: string;
  className?: string;
  image?: ImageProps;
  children?: ReactNode;
  imageLocation?: 'left' | 'right';
}

/**
 * Card component
 * This component is used to display a card with an image and text
 * @param title - The title of the card
 * @param imageLocation - The location of the image (left or right)
 * @returns
 */
const CardComponent: React.FC<CardProps> = ({
  title,
  className,
  image,
  children,
  imageLocation = 'left',
}) => {
  const imageElement = image && (
    <div className="col-md-6 d-flex align-items-center justify-content-center">
      <img src={image.src} alt={image.alt} className={image.className} />
    </div>
  );

  const contentElement = (
    <div className="col-md-6">
      <div className="card-content">
        <h1 className="title">{title}</h1>
        <div className="card-children">{children}</div>
      </div>
    </div>
  );

  return (
    <Card className={className}>
      <div className="row">
        {imageLocation === 'left' && imageElement}
        {contentElement}
        {imageLocation === 'right' && imageElement}
      </div>
    </Card>
  );
};

export default CardComponent;
