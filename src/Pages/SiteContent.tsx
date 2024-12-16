import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { pagesContent } from './PagesContent';
import Footer from '../Components/Footer';
import BackToTopButton from '../Components/BackToTop';

const SiteContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const element = document.getElementById(currentPath.slice(1));
    element?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  return (
    <div className="site-content">
      {Object.values(pagesContent).map((page) => {
        return (
          <div key={page.href} id={page.href}>
            {page.component && <page.component />}
          </div>
        );
      })}
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default SiteContent;
