import React from 'react';

import { Route, Routes, useRoutes } from 'react-router-dom'
import serverData from '../utils/serverData';

import Header from './Header';
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Services,
  History,
  Location,
  Friend,
} from './pages.jsx';

import './App.css';
import Whoops404 from './Whoops404';


function App() {

  // let element = useRoutes(
  //   [
  //     { path: "/", element: <Home /> },
  //     {
  //       path: "about", element: <About />,
  //       children:
  //         [
  //           { path: "services", element: <Services /> },
  //           { path: "history", element: <History /> },
  //           { path: "location", element: <Location /> },
  //         ]
  //     },
  //     { path: "events", element: <Events /> },
  //     { path: "products", element: <Products /> },
  //     {
  //       path: "contact", element: <Contact serverData={serverData} />,
  //       children: [
  //         { path: "contact:id", element: <Friend serverData={serverData} /> },

  //       ]
  //     },
  //     { path: "*", element: <Whoops404 /> },
  //     { path: "services", redirectTo: "about/services" },
  //   ]
  // )
  return (
    <div className="App">
      <Header />
      {/* {element} */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='about' element={<About />} >
          <Route path='services' element={<Services />} />
          <Route path='history' element={<History />} />
          <Route path='location' element={<Location />} />
        </Route>
        <Route path='events' element={<Events />} />
        <Route path='products' element={<Products />} />
        {/* <Route exact path='contact' element={<Contact serverData={serverData} />} /> */}
        {/* <Route path='contact:id' element={<Friend serverData={serverData} />} /> */}
        <Route path='contact' element={<Contact serverData={serverData} />} >
          <Route path='contact:id' element={<Friend serverData={serverData} />} />
          <Route path='5' element={<Friend serverData={serverData} />} />
        </Route>
        <Route path='*' element={<Whoops404 />}></Route>
      </Routes>

    </div >
  );
}

export default App;
