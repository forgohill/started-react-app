import React from 'react';

import RandomBubble from './RandomBubble.jsx'


function Bubbles(props) {
  return Array.from(Array(20), (_, i) => (
    <RandomBubble key={i} size={props.size} />
  ));
}

export default Bubbles;
