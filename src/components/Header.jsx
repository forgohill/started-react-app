import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './Header.css';

function Header() {

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  function goForward() {
    navigate(1);
  }

  return (
    <>

      <div className='header__nav'>
        <Link to="/" className='page__item'>[Home]</Link>
        <h1 className='heading'>Стандартный веб-сайт</h1>
        <button className="home__btn" onClick={goBack}>[НАЗАД]</button>
        <button className="home__btn" onClick={goForward}>[ВПЕРЕД]</button>
      </div>


      <div className='nav'>
        <Link to="/about" className='page__item'>ABOUT</Link>
        <Link to="/events" className='page__item'>EVENTS</Link>
        <Link to="/products" className='page__item'>PRODUCTS</Link>
        <Link to="/contact" className='page__item'>CONTACT US</Link>
      </div>
    </>
  );
}

export default Header;
