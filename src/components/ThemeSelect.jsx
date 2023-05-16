import React from 'react';


function ThemeSelect(props) {
  const theme = props.theme;



  return (

    <>
      <div className={`theme-select`}>
        <div className={`theme-select__heding`}>выбор темы</div>
        <div className="theme-select__icon">{theme === 'theme__day' ? '🔆' : '🌙'}</div>
      </div>
      <select onChange={props.onChange} className={`theme-select ${theme}`}>
        <option value="theme__day">День&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={`theme-select__span`}>{props.theme === "theme__day" && "✅"}</span>
        </option>
        <option value="theme__night">Ночь&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={`theme-select__span`}>{props.theme === "theme__night" && "✅"}</span>
        </option>
      </select>
    </>


  );
}

export default ThemeSelect;
