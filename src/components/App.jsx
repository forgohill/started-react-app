import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';

import Friend from './Friend.jsx'
import Friends from './Friends.jsx'

import serverData from '../utils/serverData';
import Dashboard from './Dashboard.jsx'





function App() {
  return (
    <BrowserRouter>


      <div className='App'>

        <header className="header">
          <NavLink to='/' className="header__logo">Parrot Friendship Society</NavLink>

          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item">
                <NavLink className="menu__link" to='/friends'>Друзья</NavLink>
              </li>
              <li className="menu__list-item">
                <NavLink className="menu__link" to='/news'>Новости</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/friends' element={<Friends serverData={serverData} />} />
          <Route path='/friends/:id' element={<Friend serverData={serverData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
