import React from 'react';
import { Route, Routes, Switch, Navigate } from 'react-router-dom'

import Login from './Login.jsx';
import Register from './Register.jsx';
import Ducks from './Ducks.jsx';
import MyProfile from './MyProfile.jsx';

// импорт CSS
import './App.css';

function App() {
  const [loggedIn, setloggedIn] = React.useState(false);

  return (
    <Routes>
      <Route path="/" element={
        loggedIn
          ? <Navigate to="/ducks" replace />
          : <Navigate to="/login" replace />}
      />
      <Route path='/ducks' element={<Ducks />} />
      <Route path='/my-profile' element={<MyProfile />} />
      <Route path='/login' element={
        <div className='loginContaner'>
          <Login />
        </div>
      } />
      <Route path='/register' element={
        <div className='registerContaner'>
          < Register />
        </div>
      } />
    </Routes>
  );
}

export default App;
