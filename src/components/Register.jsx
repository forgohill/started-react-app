import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as duckAuth from './duckAuth'


import './Register.css';

function Register() {
  const [formValue, setFormValue] = React.useState({
    username: '',
    email: '',
    confirmPassword: '',
    calGoal: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValue.confirmPassword === formValue.password) {
      console.log(formValue);
      const { username, password, email } = formValue;
      duckAuth.register(username, password, email)
        .then((res) => {
          navigate('/login', { replace: true });
        });
    }

    // тут обработчик регистраций
  }

  return (
    <div className="register">
      <p className="register__welcome">
        Пожалуйста, зарегистрируйтесь.
      </p>
      <form onSubmit={handleSubmit}
        className="register__form">

        <label
          htmlFor="username">Логин:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formValue.username}
          onChange={handleChange} />
        <label htmlFor="email">Email:</label>

        <input
          id="email"
          name="email"
          type="email"
          value={formValue.email}
          onChange={handleChange} />

        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formValue.password}
          onChange={handleChange} />

        <label htmlFor="confirmPassword">Повторите пароль:</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formValue.confirmPassword}
          onChange={handleChange} />

        <label htmlFor="calGoal">Калории за день:</label>
        <input
          id="calGoal"
          name="calGoal"
          type="number"
          value={formValue.calGoal}
          onChange={handleChange} />

        <div className="register__button-container">
          <button type="submit" onSubmit={handleSubmit} className="register__link">Зарегистрироваться</button>
        </div>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="/login" className="register__login-link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;
