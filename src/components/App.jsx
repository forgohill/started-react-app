import React from 'react';
import { Route, Routes } from 'react-router-dom'
import serverData from '../utils/serverData';
import Header from './Header';
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Services,
  History,
  Location,
  Friend,
} from './pages.jsx';
import './App.css';
import Whoops404 from './Whoops404';
import ThemeSelect from './ThemeSelect.jsx';
import { TranslationContext, translations } from './TranslationContext';


function App() {
  const [theme, setTheme] = React.useState('theme__day');
  const [lang, setLang] = React.useState('en');
  const [langStatus, setLangStatus] = React.useState(true);

  function handleLangChange() {

    if (langStatus === true) {
      setLang("ru");
      setLangStatus(false);
    } else {
      setLang("en");
      setLangStatus(true);
    }
  }

  function handleThemeChange(e) {
    setTheme(e.target.value);
  };

  return (
    <div className={`App ${theme}`}>
      <TranslationContext.Provider value={translations[lang]}>
        <ThemeSelect onChange={handleThemeChange} theme={theme} />
        <Header onChange={handleLangChange} lang={lang} />
        <Routes >
          <Route exact path='started-react-app/' element={<Home />} />
          <Route path='started-react-app/about' element={<About />} >
            <Route path='services' element={<Services />} />
            <Route path='history' element={<History />} />
            <Route path='location' element={<Location />} />
          </Route>
          <Route path='started-react-app/events' element={<Events />} />
          <Route path='started-react-app/products' element={<Products />} />
          <Route exact path='started-react-app/contact' element={<Contact serverData={serverData} />} />
          <Route path='started-react-app/contact/:id' element={<Friend serverData={serverData} />} />
          <Route path='*' element={<Whoops404 />}></Route>
        </Routes>
      </TranslationContext.Provider>
    </div >
  );
}

export default App;

