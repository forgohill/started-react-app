import React, {useEffect, useState} from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Reviews from "./Reviews";
import AboutMe from "./about-me/AboutMe";
import AboutUs from "./about-us/AboutUs";
import Header from './Header';

import { Route, Routes } from 'react-router-dom';
import MyStory from "./about-me/MyStory";
import Hobbies from "./about-me/Hobbies";
import Contact from "./about-me/Contact";
import SiteHistory from './about-us/SiteHistory';
import SiteMission from './about-us/SiteMission';
import Review from "./Review";

function App() {
  const [reviews, setReviews] = useState();
  // этот хук используется единожды, при запуске компонента
  useEffect(() => {
    // получаем данные с сервера
    fetch('https://api.nomoreparties.co/emoji-critic-rus').then((res) => {
      return res.json();
    }).then((parsedReviews) => {
      // форматируем данные и, используя setData, обновляем текущий стейт
      setReviews(Object.values(parsedReviews));
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews}/>} />
        <Route exact path="/reviews/:id" element={<Review reviews={reviews}/>} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;