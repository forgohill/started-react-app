import React from 'react';

import './App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom'; // импортируем Routes
import Dashboard from './Dashboard'


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
