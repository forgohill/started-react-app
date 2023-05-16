import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react-router-dom'
import { TranslationContext, translations } from './TranslationContext';
import './Header.css';

function Header() {

  const [lang, setLang] = React.useState(true);

  function handleLangButton() {
    // console.log(lang)
    if (lang === true) {
      setLang(false);
    } else {
      setLang(true);
    }
  }



  React.useEffect(() => {
    console.log(translations)
    return () => {
    };
  }, [translations]);


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
        <h1 className='heading'>{translations.ru.welcomePhrase}</h1>
        <button className="home__btn" onClick={goBack}>[НАЗАД]</button>
        <button className="home__btn" onClick={goForward}>[ВПЕРЕД]</button>
      </div>
      <div className='header__nav'>
        <div>смена языка: </div>
        <button className="home__btn" onClick={handleLangButton}>{`[ENG]`}</button>
        {/* <button className="home__btn" onClick={handleLangButton}>[RUS]</button> */}
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
