import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react-router-dom'

import './Friend.css'
import Slider from './Slider'

export function Home() {
  return (
    <div className="">
      <h1 className='heading page__pages'>[Home page]</h1>
    </div>
  );
};

export function About() {
  return (
    <>
      <div className="page__pages">
        <h1>[About]</h1>
      </div>
      <div className='nav'>
        <Link to="services" className='page__item'>SERVICES</Link>
        <Link to="history" className='page__item'>HISTORY</Link>
        <Link to="location" className='page__item'>LOCATION</Link>
      </div>
      <Outlet />
    </>
  );
};

export function Events() {
  return (
    <div className="page__pages">
      <h1>[Events]</h1>
    </div>
  );
};

export function Products() {
  const [size, setSize] = React.useState(45);

  function handleSizeChange(e) {
    setSize(e.target.value);
  }

  return (
    <>
      <div className="page__pages" style={{ backgroundColor: `rgba(222, 184, 135, 0.${size})` }}>
        <h1 style={{ fontSize: `${size}px` }}>[Products]</h1>

        <Slider onChange={handleSizeChange} size={size} />
      </div >

    </>
  );
};

export function Contact(props) {

  let { friends } = props.serverData;

  React.useEffect(() => {
    console.log(props)
    console.log({ friends })
    return () => {
    };
  }, []);

  return (
    <>
      <div className="page__pages">
        <h1>[Contact]</h1>
      </div>
      <div className='nav'>
        {
          friends.map(
            (friend) => {
              return (
                <div className='page__item-wrapper' key={friend.id}>
                  <Link to={`${friend.id}`}
                    className='page__item'>
                    <img
                      src={friend.profilePicDark}
                      alt={friend.name}
                      className='page__avatar'
                    />
                    <span className="page__span">{friend.name}</span>
                  </Link>
                </div>
              )
            }
          )
        }

        <Link to="/5" className='page__item'>FRIEND__404</Link>
      </div>
      {/* <Outlet /> */}
    </>
  );
};


export function Services() {
  return (
    <div className="page__insert">
      <h1>[Services]</h1>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia obcaecati blanditiis, ab a veritatis voluptatem sequi porro optio, itaque illum et rerum eveniet accusantium dicta nihil quasi hic cupiditate.</p>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas saepe ducimus possimus accusamus cumque dolore veniam dolores vero hic? Minus illo consectetur cum molestiae laborum. Quas beatae repellat unde ipsa.</p>
    </div>
  );
};

export function History() {
  return (
    <div className="page__insert">
      <h1>[History]</h1>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia obcaecati blanditiis, ab a veritatis voluptatem sequi porro optio, itaque illum et rerum eveniet accusantium dicta nihil quasi hic cupiditate.</p>
    </div>
  );
};

export function Location() {
  return (
    <div className="page__insert">
      <h1>[Location]</h1>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia obcaecati blanditiis, ab a veritatis voluptatem sequi porro optio.</p>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia obcaecati blanditiis, ab a veritatis voluptatem sequi porro optio.</p>
    </div>
  );
};


export function Friend(props) {

  let { id } = useParams();

  let { friends } = props.serverData;

  const friend = friends.find(f => f.id === id);


  React.useEffect(() => {
    console.log(id)
    console.log(friends)
    console.log(friend);

    return () => {
    };
  }, []);


  return (

    <div className="page__insert">
      <h1>[Friend]</h1>
      <div className="friend__card">
        <img className="friend__userpic" src={friend.profilePicLight} alt={friend.name} />
        <div className="friend__details">
          <h3 className="friend__name">{friend.name}</h3>
          <p className="friend__location">Местоположение: {friend.location}</p>
          <p className="friend__quantity">Количество домашних попугаев: {friend.parrotsOwned.length}</p>
          <p className="friend__fav-quote">Любимое высказывание о птицах: "{friend.favBirdQuote}"</p>
        </div>
      </div>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia obcaecati blanditiis, ab a veritatis voluptatem sequi porro optio.</p>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia obcaecati blanditiis, ab a veritatis voluptatem sequi porro optio.</p>
    </div>
  );
};
