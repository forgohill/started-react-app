import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Bubbles from './miniapps/Bubbles.jsx'
import { TranslationContext } from './TranslationContext';
import './Friend.css'
import Slider from './Slider'

export function Home() {
  const translation = React.useContext(TranslationContext);
  return (
    <div className="">
      <h1 className='heading page__pages'>{translation.homePage}</h1>
    </div>
  );
};

export function About() {
  const translation = React.useContext(TranslationContext);
  return (
    <>
      <div className="page__pages">
        <h1>{translation.about}</h1>
      </div>
      <div className='nav'>
        <Link to="services" className='page__item'>{translation.services}</Link>
        <Link to="history" className='page__item'>{translation.history}</Link>
        <Link to="location" className='page__item'>{translation.location}</Link>
      </div>
      <Outlet />
    </>
  );
};

export function Events() {
  const translation = React.useContext(TranslationContext);
  return (
    <div className="page__pages">
      <h1>{translation.events}</h1>
    </div>
  );
};

export function Products() {
  const translation = React.useContext(TranslationContext);
  const [size, setSize] = React.useState(0);

  function handleSizeChange(e) {
    setSize(e.target.value);
  }

  return (
    <>
      <div className="page__pages" style={{ backgroundColor: `rgba(255, 0, 0, 0.${size})` }}>
        <h1 >{translation.products}</h1>

        <Slider onChange={handleSizeChange} size={size} />
        <Bubbles size={size} />
      </div >

    </>
  );
};

export function Contact(props) {
  const translation = React.useContext(TranslationContext);
  let { friends } = props.serverData;

  return (
    <>
      <div className="page__pages">
        <h1>{translation.contact}</h1>
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

        <Link to="/5" className='page__item'>{translation.friend404}</Link>
      </div>
    </>
  );
};


export function Services() {
  const translation = React.useContext(TranslationContext);
  return (
    <div className="page__insert">
      <h1>{translation.services}</h1>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia obcaecati blanditiis, ab a veritatis voluptatem sequi porro optio, itaque illum et rerum eveniet accusantium dicta nihil quasi hic cupiditate.</p>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas saepe ducimus possimus accusamus cumque dolore veniam dolores vero hic? Minus illo consectetur cum molestiae laborum. Quas beatae repellat unde ipsa.</p>
    </div>
  );
};

export function History() {
  const translation = React.useContext(TranslationContext);
  return (
    <div className="page__insert">
      <h1>{translation.history}</h1>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia obcaecati blanditiis, ab a veritatis voluptatem sequi porro optio, itaque illum et rerum eveniet accusantium dicta nihil quasi hic cupiditate.</p>
    </div>
  );
};

export function Location() {
  const translation = React.useContext(TranslationContext);
  return (
    <div className="page__insert">
      <h1>{translation.location}</h1>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia obcaecati blanditiis, ab a veritatis voluptatem sequi porro optio.</p>
      <p className="page__paragrapher">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia obcaecati blanditiis, ab a veritatis voluptatem sequi porro optio.</p>
    </div>
  );
};


export function Friend(props) {
  const translation = React.useContext(TranslationContext);
  let { id } = useParams();

  let { friends } = props.serverData;

  const friend = friends.find(f => f.id === id);


  React.useEffect(() => {
    // console.log(id)
    // console.log(friends)
    // console.log(friend);

    return () => {
    };
  }, []);


  return (

    <div className="page__insert">
      <h1>{translation.friend}</h1>
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
