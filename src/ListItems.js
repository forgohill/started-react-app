import React from 'react';

import './ListItems.css'

function ListItems({ array }) {


  // useEffect для отслеживания что попадет в props
  React.useEffect(() => {
    console.log(listItem);
    console.log(array);
  }, [array]);

  const listItem = array.map((item, index) => {

    const key
      = index + 1;


    return (
      <li className="list__item"
        key={key}
      >{item}</li>
    );


  })

  return (
    <ul className="list__list">{listItem}</ul>
  );
}

export default ListItems;
