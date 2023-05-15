import React from 'react';
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <h1 className='heading'>
        <Link to="/" className='page__item'>[Home]</Link>
        Стандартный веб-сайт</h1>
      <div className='nav'>
        <Link to="about" className='page__item'>ABOUT</Link>
        <Link to="events" className='page__item'>EVENTS</Link>
        <Link to="products" className='page__item'>PRODUCTS</Link>
        <Link to="contact" className='page__item'>CONTACT US</Link>
      </div>
    </>
  );
}

export default Header;
