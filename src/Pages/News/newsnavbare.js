// Newsnavbare.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NewsPage.css';

function Newsnavbare() {
  const location = useLocation();

  return (
    <div className="top-bar">
      <Link to="matches" className={location.pathname === '/News/matches' ? 'active' : ''}>All Matches</Link>
      <Link to="competitions" className={location.pathname === '/News/competitions' ? 'active' : ''}>Competitions</Link>
      <Link to="events" className={location.pathname === '/News/events' ? 'active' : ''}>Events</Link>
      <Link to="athletes" className={location.pathname === '/News/athletes' ? 'active' : ''}>Athletes</Link>
      <Link to="coaches" className={location.pathname === '/News/coaches' ? 'active' : ''}>Coaches</Link>
    </div>
  );
}

export default Newsnavbare;
