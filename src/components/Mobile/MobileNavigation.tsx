import React, { useState, useEffect } from "react";
import { pagesContent } from "../../Pages/PagesContent";

const sections = Object.keys(pagesContent).map((key) => {
  return {
    id: key,
    text: pagesContent[key].title,
  };
});

const MobileNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  return (
    <>
      <button
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
      {isMenuOpen && (
        <div className="mobile-menu">
          {sections.map((section) => (
            <div className="top-nav-item" key={section.id}>
              <a href={`#${section.id}`} onClick={() => setIsMenuOpen(false)}>
                {section.text}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
