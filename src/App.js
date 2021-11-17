import React from 'react';
import './App.css';
//useState, useEffect, react-router-dom, all mui things
//useContext? ... ContextSource and ContextProvider for favorites and "your apps"  --last step

import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './AppContext';


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
          <Active applications> (full color/carousel)
          grid
            <all applications> */}
          <div className="App">
            <header className="App-header">
              Welcome to Terminus!
            </header>
            <p>The Test of Tests again</p>
            <br></br>
          </div>
        </Router>
      </React.StrictMode>
    </AppProvider>
  );
}

export default App;



