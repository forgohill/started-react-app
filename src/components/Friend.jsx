// компонент Friend

import React from 'react';
import { useParams } from 'react-router-dom'; // импортируем хук


function Friend(props) {
  let { id } = useParams(); // получаем доступ к параметру URL

  let { friends } = props.serverData; // достаём данные, используя деструктуризацию
  const friend = friends.find(f => f.id === id);

  React.useEffect(() => {
    console.log(id)
    return () => {

    };
  }, []);

  return (
    <div className="friend">
      <div className="friend__card">
        <img className="friend__userpic" src={friend.profilePicLight} alt={friend.name} />
        <div className="friend__details">
          <h3 className="friend__name">{friend.name}</h3>
          <p className="friend__location">Местоположение: {friend.location}</p>
          <p className="friend__quantity">Количество домашних попугаев: {friend.parrotsOwned.length}</p>
          <p className="friend__fav-quote">Любимое высказывание о птицах: "{friend.favBirdQuote}"</p>
        </div>
      </div>
    </div>
  );
}

export default Friend;
