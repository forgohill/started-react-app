import React from 'react';

import './App.css';

import ListItems from './ListItems';

function App() {

  const [isAddContainer, setIsAddContainer] = React.useState('');
  const [isCount, setIsCount] = React.useState(Number);
  const [isAddArray, setIsAddArray] = React.useState([]);

  const handleButtonClick = (event) => {
    setIsAddContainer(event.target.textContent)
  }

  const handleCount = (event) => {
    if (event.target.name === 'btnOne') {
      setIsCount(isCount + 1);
    } else {
      setIsCount(isCount - 1);
    }
  }

  const handleArray = (event) => {
    // console.log(event.target);

    if (event.target.name === 'btnOne') {
      setIsAddArray([...isAddArray, event.target.name]);
    } else {
      setIsAddArray([...isAddArray, event.target.name]);
    }

    // console.log(isAddArray);
  }

  return (
    <div className="App">


      <div className='app__column'>
        <h1 className='app__header'>изучение useState,
          массив с строчками
        </h1>
        <div className='app__wrapper_button'>
          <button
            name='btnOne'
            className='app__button' onClick={handleArray}>добавь btnOne</button>
          <button
            name='btnTwo'
            className='app__button' onClick={handleArray}>добавь btnTwo</button>
        </div>
        <div className='app__box'>
          <div className='app__container'>

            <ListItems
              array={isAddArray}
            />


          </div>
        </div>
      </div>



      <div className='app__column'>
        <h1 className='app__header'>изучение useState, кнопочный счетчик</h1>
        <div className='app__wrapper_button'>
          <button
            name='btnOne'
            className='app__button' onClick={handleCount}>+1</button>
          <button
            name='btnTwo'
            className='app__button' onClick={handleCount}>-1</button>
        </div>
        <div className='app__box'>
          <div className='app__container'>
            {isCount}
          </div>
        </div>
      </div>

      <div className="app__column">
        <h1 className='app__header'>изучение useState, отображение елемента</h1>
        <div className='app__wrapper_button'>
          <button
            name='btnOne'
            className='app__button' onClick={handleButtonClick}>кнопка__1</button>
          <button
            name='btnTwo'
            className='app__button' onClick={handleButtonClick}>кнопка__2</button>
        </div>
        <div className='app__box'>
          <div className='app__container'>
            {isAddContainer}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;


