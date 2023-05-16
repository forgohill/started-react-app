import React from 'react';
import { useState } from 'react-router-dom'

import './Slider.css'
function Slider({ size, onChange }) {


  return (

    <div id="slider-container">
      <input type="range" min="0" max="99" value={`${size}`} onChange={onChange} />
      <div className="counter">{`${size}`}</div>
    </div>

  );
}

export default Slider;
