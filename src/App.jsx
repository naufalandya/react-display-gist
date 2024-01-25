import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Thoughts from './thoughts';
import Journals from './journals';
import Activities from './activities';
import Portfolio from './portfolio';
import './style.css';

export function App() {
  const [showThoughts, setShowThoughts] = useState(true);

  const handleNavLinkClick = () => {
    setShowThoughts(true);
  };

  return (
    <div className='App'>
      <Router>
        <nav className="navbar">
          <div className="nav-container">
            <ul className="nav-list">
              <li>
                <NavLink to="/" exact activeClassName="active" onClick={handleNavLinkClick}>
                  Thoughts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/journal"
                  exact
                  activeClassName="active"
                  onClick={() => setShowThoughts(false)}
                >
                  Journal
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/activity"
                  exact
                  activeClassName="active"
                  onClick={() => setShowThoughts(false)}
                >
                  Activity
                </NavLink>
              </li>
              <li>
                <a href="https://heyandya.surge.sh" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="wrapper-main-container">
          <div className='content'>
            <Routes>
              <Route path="/" element={showThoughts ? <Thoughts /> : null} />
              <Route path="/journal" element={<Journals />} />
              <Route path="/activity" element={<Activities />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}
