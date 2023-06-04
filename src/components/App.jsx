import React from 'react';
import { Route, Routes, Switch, Navigate } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
import * as duckAuth from './duckAuth'
import Login from './Login';
import Register from './Register';
import Ducks from './Ducks';
import MyProfile from './MyProfile';
import ProtectedRouteElement from './ProtectedRoute';

// импорт CSS
import './App.css';

function App() {
  const [loggedIn, setloggedIn] = React.useState(false);
  React.
    useEffect(() => {
      tockenCheck();
    }, []);
  const navigate = useNavigate();
  const tockenCheck = () => {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      // проверим токен
      duckAuth.checkToken(jwt).then((res) => {
        if (res) {
          // авторизуем пользователя
          setloggedIn(true);
          navigate("/ducks", { replace: true })
        }
      });
    }
  }

  const handleLogin = (e) => {
    console.log('!');
    e.preventDefault();
    setloggedIn(true);
  }


  return (
    <Routes>
      <Route
        path="/"
        element={loggedIn
          ? <Navigate to="/ducks" replace />
          : <Navigate to="/login" replace />}
      />
      <Route
        path="/ducks"
        element={<ProtectedRouteElement
          element={<Ducks />}
          loggedIn={loggedIn}
        // handleLogin={handleLogin}
        />}
      />
      <Route
        path="/my-profile"
        element={<ProtectedRouteElement
          element={<MyProfile />}
          loggedIn={loggedIn}
        // handleLogin={handleLogin}
        />} />
      <Route
        path="/register"
        element={
          <div className="registerContainer">
            <Register />
          </div>} />
      <Route
        path="/login"
        element={
          <div className="loginContainer">
            <Login handleLogin={handleLogin} />
          </div>} />
    </Routes>
  );
}

export default App;
