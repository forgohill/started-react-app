import React from 'react';

import { Route, Routes, useRoutes } from 'react-router-dom'
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


function App() {
  const [theme, setTheme] = React.useState('theme__day');

  function handleThemeChange(e) {
    setTheme(e.target.value);
  };

  return (
    <div className={`App ${theme}`}>
      <ThemeSelect onChange={handleThemeChange} theme={theme} />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} >
          <Route path='services' element={<Services />} />
          <Route path='history' element={<History />} />
          <Route path='location' element={<Location />} />
        </Route>
        <Route path='/events' element={<Events />} />
        <Route path='/products' element={<Products />} />
        <Route exact path='/contact' element={<Contact serverData={serverData} />} />
        <Route path='/contact/:id' element={<Friend serverData={serverData} />} />
        <Route path='*' element={<Whoops404 />}></Route>
      </Routes>
    </div >
  );
}

export default App;

