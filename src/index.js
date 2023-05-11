import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const createElement = React.createElement(
  'div', {},
  React.createElement('h1', {}, "HELLO WORLD"),
  React.createElement('a', { href: 'mailto:matlo-nn@yandex.ru' },
    React.createElement('h2', {}, "Отправь сообщение Саньку"),
    React.createElement('em', {}, "...и это реально!!")
  )
);
root.render(
  <React.StrictMode>
    {createElement}
    <App />
  </React.StrictMode>
);

// Если вы хотите начать измерение производительности в своем приложении, передайте функцию
// для регистрации результатов (например: reportWebVitals(console.log))
// или отправить на конечную точку аналитики. Узнайте больше: https://bit.ly/CRA-vitals

