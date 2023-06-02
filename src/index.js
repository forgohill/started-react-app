import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Если вы хотите начать измерение производительности в своем приложении, передайте функцию
// для регистрации результатов (например: reportWebVitals(console.log))
// или отправить на конечную точку аналитики. Узнайте больше: https://bit.ly/CRA-vitals

