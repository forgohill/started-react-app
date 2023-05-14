import React from 'react';
import Friend from './Friend'
import { Link } from 'react-router-dom'


function Friends(props) {
  let { friends } = props.serverData;

  return (

    <>
      <div className="friends">
        <ul className="friends__list">
          {
            friends.map((friend) => {
              return (
                <li className="friend-preview" key={friend.id}>
                  <Link to={`${friend.id}`}>
                    <img alt="" src={friend.profilePicDark} className="friend-preview__image" />
                    <span className="friend-preview__name">{friend.name}</span>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      {/* <Friend /> */}
    </>

  );
}

export default Friends;
