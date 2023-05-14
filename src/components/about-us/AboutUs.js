import React from 'react';
import './AboutUs.css';

import { Link, Outlet } from 'react-router-dom';


function AboutUs() {
  return (
    <div className="about-us">
      <h2>О нас</h2>
      <ul className="links">
        <li>
          <Link to="site-history">История приложения</Link>
        </li>
        <li><Link to="site-mission">Наша миссия</Link></li>
      </ul>
      <Outlet />
    </div >
  )
}

export default AboutUs;
