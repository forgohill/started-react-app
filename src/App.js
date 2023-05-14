import React from 'react';
import './App.css';
import Doubler from './Doubler';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Маршрутный удвоитель</h1>
        <p>Чтобы запустить удвоитель, введите маршрут. Допустимы только URL-адреса, состоящие из цифр!</p>
        <Link to="/2">2</Link>
        <Link to="/10">10</Link>
        <Link to="/42">42</Link>
        <Link to="/coffee">Coffee</Link>
        <Routes>
          <Route path="/:number" element={<Doubler />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;