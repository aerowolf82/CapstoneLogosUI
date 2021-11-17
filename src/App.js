import React from 'react';
import './App.css';
import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './AppContext';
//import Slider from '@bit/akiran.react-slick.slider';


function App() {

  const { appList, setAppList, user, setUser } = useContext(AppContext); //import database from AppContext here

  return (
    <AppProvider>
      <React.StrictMode>
        <Router>
          {/* Home page displayed by default
          <navbar>
            <grogu>
            <Site title>
            <Greeting>
            <search bar> link to line 12
            hamburger button drop-down or profile logo button
              <link> for profile page
              <link> to admin panel - based on isAdmin

          <div> for constellation image? and p1 logo
            background constellation css
            p1 logo
            terminus logo
            "Single Source for Platform One Apps"

          Switch (Routes??)
          Route for profile page
            <UserProfile>
          Route for publish page
            <Admin>
          <Active applications> (full color/carousel https://bit.dev/akiran/react-slick/slider)
          grid
            <all applications> */}
          {/* <div className="App">
            <header className="App-header">
              Welcome to Terminus!
            </header>
            <p>The Test of Tests again</p>
            <br></br>
            <Slider {...settings}>
              <div>
                <h3>hello</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
            </Slider>
          </div> */}
        </Router>
      </React.StrictMode>
    </AppProvider>
  );
}

export default App;



