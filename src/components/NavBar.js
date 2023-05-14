import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
  return (
    <nav className="menu">
      <NavLink to="/" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Домой</NavLink>
      <NavLink to="/reviews" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Обзоры эмодзи</NavLink>
      <NavLink to="/about-me" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Обо мне</NavLink>
      <NavLink to="/about-us" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>О нас</NavLink>
    </nav>
  )
}

export default NavBar;