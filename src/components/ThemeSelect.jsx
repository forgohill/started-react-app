import React from 'react';
import { TranslationContext } from './TranslationContext';

function ThemeSelect(props) {
  const theme = props.theme;
  const translation = React.useContext(TranslationContext);


  return (

    <>
      <div className={`theme-select`}>
        <div className={`theme-select__heding`}>{translation.selectTheme}</div>
        <div className="theme-select__icon">{theme === 'theme__day' ? '🔆' : '🌙'}</div>
      </div>
      <select onChange={props.onChange} className={`theme-select ${theme}`}>
        <option value="theme__day">{translation.day}&nbsp;&nbsp;&nbsp;&nbsp;{props.theme === "theme__day" && "✅"}

        </option>
        <option value="theme__night">{translation.night}&nbsp;&nbsp;&nbsp;&nbsp;{props.theme === "theme__night" && "✅"}

        </option>
      </select>
    </>


  );
}

export default ThemeSelect;
