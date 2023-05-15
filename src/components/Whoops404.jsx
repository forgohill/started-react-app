import React from 'react';
import { useLocation } from 'react-router-dom';

function Whoops404() {

  let location = useLocation();
  console.log(location);

  return (
    <div className="page__404">
      <h1 className='heading'>[Resourse not found — 404 {location.pathname}]</h1>
    </div>
  );
}

export default Whoops404;
