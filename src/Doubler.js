import React from 'react';
import { useParams } from 'react-router-dom'

import './App.css';


function Doubler(props) {

  const { number } = useParams();

  React
    .useEffect(() => {
      console.log({ number });
      console.log(number * 2);
      console.log(Number.isFinite(number * 2))

      return () => {
      };
    }, []);


  if (!Number.isFinite(number * 2)) {

    return (
      <p>НЕЕЕТ, ЭТО НЕ ЧИСЛО</p>
    );
  } else {

    return (
      <>
        <p>{number * 2}</p>
      </>
    );
  }

}

export default Doubler;
