import React from "react";
import CardComponent from "./CardRow";

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface PageProps {
  /**
   * The title of the page.
   */
  title: string;

  /**
   * The main content of the page.
   */
  content: React.ReactNode;

  /**
   * Additional classes for styling the page.
   */
  className?: string;

  /**
   * An optional image to be displayed on the page.
   */
  image?: ImageProps;

  /**
   * Optional children to be rendered inside the page.
   */
  children?: React.ReactNode;

  /**
   * An optional href for creating anchor links to the page.
   */
  href?: string;
}

/**
 * Page Component
 *
 * Represents a single page in the portfolio website.
 *
 * @param {PageProps} props - The props for the Page component.
 * @returns {JSX.Element} - The JSX element representing the page.
 */
const Page: React.FC<PageProps> = ({
  title,
  content,
  className,
  image,
  children,
  href,
}) => {
  return (
    <div className={`page ${className}`} id={href}>
      <CardComponent
        title={title}
        image={image}
        className="card"
        children={children}
      />
    </div>
  );
};

export default Page;
