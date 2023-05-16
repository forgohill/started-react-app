import React from 'react';

function RandomBubble(props) {
  // Возвращает случайное целое число в заданном диапазоне
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Используем стейт, чтобы запомнить исходные параметры при первом рендере
  const [initialStyle] = React.useState({
    top: getRandomInt(0, document.body.offsetHeight),
    left: getRandomInt(0, document.body.offsetWidth),
    backgroundColor: `#${getRandomInt(0, (256 ** 3) - 1).toString(16)}`,
  });
  const [initialScale] = React.useState(getRandomInt(1, 10) / 20);

  return (
    <div className="bubble" style={{
      ...initialStyle,
      // Исходный масштаб домножается на значение props.size или на 0, если props.size не задан
      transform: `scale(${initialScale * (props.size || 0)})`,
    }} />
  );
}



export default RandomBubble;
