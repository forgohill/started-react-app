import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AboutMe.css';

function AboutMe () {
  return (
    <div className="about-me">
      <ul className="links">
        <li>
          <Link to={`my-story`}>Моя история</Link>
        </li>
        <li>
          <Link to={`hobbies`}>Хобби</Link>
        </li>
        <li>
          <Link to={`contact`}>Контактная информация</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default AboutMe;