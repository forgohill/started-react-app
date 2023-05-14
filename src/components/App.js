import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} >
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
