import { BrowserRouter as Router } from 'react-router-dom';
import MobileNavigation from './components/Mobile/MobileNavigation';
import TopNav from './components/TopNav';
import SiteContent from './Pages/SiteContent';
import useWindowSize from './helpers';
// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom/client';

function App() {
  const windowSize = useWindowSize() || { width: 0, height: 0 };
  return (
    <div className="App">
      <Router>
        {windowSize.width <= 768 ? <MobileNavigation /> : <TopNav />}
        <div className="site-content">
          <SiteContent />
        </div>
      </Router>
    </div>
  );
}

export default App;
