import React, { useEffect, useState } from "react";
import logo from "../Assets/Images/Logo.png";
import { pagesContent } from "../Pages/PagesContent";

// Extract sections from the pagesContent object
const sections = Object.keys(pagesContent).map((key) => {
  return {
    id: key,
    text: pagesContent[key].title,
  };
});

/**
 * TopNav Component
 * This component renders the top navigation bar and highlights the active section.
 * @returns {React.FC} TopNav component
 */
const TopNav: React.FC = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("");

  // useEffect to update the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Get positions of all sections
      const sectionPositions = sections.map((section) => {
        const el = document.getElementById(section.id);
        return {
          id: section.id,
          position: el ? el.getBoundingClientRect().top : 0,
        };
      });

      // Sort sections based on their positions
      const sortedSections = sectionPositions.sort(
        (a, b) => Math.abs(a.position) - Math.abs(b.position)
      );

      // Set the active section based on the closest one to the top
      const active = sortedSections.length > 0 ? sortedSections[0].id : "";
      setActiveSection(active);
    };

    // Add scroll event listener and call handleScroll on mount
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="top-nav-container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Navigation items */}
      {sections.map((section) => (
        <div className="top-nav-item" key={section.id}>
          <a
            href={`#${section.id}`}
            className={section.id === activeSection ? "active" : ""}
          >
            {section.text}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default TopNav;
