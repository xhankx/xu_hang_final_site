import React, { ReactNode } from "react";

interface PageWithChildrenProps {
  /**
   * The content to be rendered inside the page.
   */
  children: ReactNode;

  /**
   * Additional classes for styling the page.
   */
  className?: string;

  /**
   * The unique ID for the page.
   */
  id: string;
}

/**
 * PageWithChildren Component
 *
 * Represents a page in the portfolio website that contains children elements.
 *
 * @param {PageWithChildrenProps} props - The props for the PageWithChildren component.
 * @returns {JSX.Element} - The JSX element representing the page with its children.
 */
const PageWithChildren: React.FC<PageWithChildrenProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <div className={"page " + className} id={id}>
      <div className="anchor-offset" />
      {children}
    </div>
  );
};

export default PageWithChildren;
