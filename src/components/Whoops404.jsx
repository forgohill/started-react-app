import React from 'react';
import { useLocation } from 'react-router-dom';
import { TranslationContext } from './TranslationContext';

function Whoops404() {
  const translation = React.useContext(TranslationContext);
  let location = useLocation();
  console.log(location);

  return (
    <div className="page__404">
      <h1 className=''>[404] {translation.resourseNotFound} {location.pathname}</h1>
    </div>
  );
}

export default Whoops404;
