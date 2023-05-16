import React from 'react';

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { TranslationContext } from './TranslationContext';
import './Header.css';

function Header(props) {
  const translation = React.useContext(TranslationContext);

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
        <Link to="started-react-app/" className='page__item'>{translation.home}</Link>
        <h1 className='heading'>
          {translation.welcomePhrase}
        </h1>
        <button className="home__btn" onClick={goBack}>{translation.back}</button>
        <button className="home__btn" onClick={goForward}>{translation.forward}</button>
      </div>
      <div className='header__nav'>
        <div>{translation.changeLangaule} </div>
        <button className="home__btn" onClick={props.onChange}>
          {translation.langSet}
        </button>

      </div>

      <div className='nav'>
        <Link to="started-react-app/about" className='page__item'>{translation.about}</Link>
        <Link to="started-react-app/events" className='page__item'>{translation.events}</Link>
        <Link to="started-react-app/products" className='page__item'>{translation.products}</Link>
        <Link to="started-react-app/contact" className='page__item'>{translation.contactUs}</Link>
      </div>
    </>
  );
}

export default Header;
