import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

/**
 * BackToTopButton Component
 * This component renders a "Back to Top" button that appears when the user scrolls down the page.
 * The button allows users to quickly scroll back to the top of the page when clicked.
 * @returns {React.FC} BackToTopButton component
 */
const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [hover, setHover] = useState(false);
  const prevScrollY = useRef<number>(0);

  /**
   * Handle scroll event and update the state to show or hide the button based on scroll position.
   */
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    prevScrollY.current = currentScrollY;
  };

  /**
   * Scroll to the top of the page smoothly when the button is clicked.
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Add scroll event listener to handle showing and hiding the button
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /**
   * Handle mouse enter event to set the hover state to true.
   */
  const handleMouseEnter = () => {
    setHover(true);
  };

  /**
   * Handle mouse leave event to set the hover state to false.
   */
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <button
      className="back-to-top-button"
      onClick={scrollToTop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        // Show the button when the user has scrolled down or hover over the button
        display: showButton ? 'block' : 'none',
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '48px',
        color: hover ? '#555' : '#333',
        zIndex: 9999,
        transition: 'opacity 0.3s',
        // Gradual opacity change based on scroll position
        opacity: showButton || prevScrollY.current > 100 ? 1 : 0,
      }}
    >
      {/* Font Awesome "Angle Up" icon */}
      <FontAwesomeIcon icon={faAngleUp} className="outline-caret-icon" />
    </button>
  );
};

export default BackToTopButton;
