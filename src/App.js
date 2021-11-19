import React from 'react';
import './App.css';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { useContext } from "react";
import { AppContext } from "./AppContext.js";
// import { BrowserRouter as Router } from 'react-router-dom';
import AllApps from "./Components/AllApps.js";
import { Parallax, Background } from "react-parallax";
import whitebg from './images/Background_WH.png'
import constellationbg from './images/Constellation.jpg'

const insideStyles = {
  background: "transparent",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      {/* <img src='/static/media/confluence.6de3944b.svg' alt="alt" height="100" width="100"></img> */}
      <img src={props.item.icon_url} alt="alt" height="100" width="100"></img>
      {/* <Button className="CheckButton">
        Check it out!
      </Button> */}
    </Paper>
  )
}

function App() {

  const {
    appList,
    imgLocations,
    user,
    activeApps,
  } = useContext(AppContext);

  var items = [
    // { img: imgList }
    // items with app details and app logo
    // import image object
    // import AppList
    //
    // compare activeApp with appList and get an item with name, description

    // {
    //   name: "Random Name #1",
    //   description: "Probably the most random thing you have ever seen!",
    //   img: Object[]
    // },
    // {
    //   name: "Random Name #2",
    //   description: "Hello World!"
    // }
  ]

  return (
    <div className="App" >
      <header className="App-header">
        Welcome to Terminus!
      </header>
      <br></br>
      <Parallax
        bgImage= {constellationbg}
        bgImageAlt= 'Constellations'
        strength={600}
        renderLayer={(percentage) => (
          <>
          </>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}></div>
        </div>
      </Parallax>
      <Carousel >
        {
          appList.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
      <AllApps/>
    </div >
  )
}

export default App;



    //  Home page displayed by default
    //       <navbar>
    //         <grogu>
    //         <Site title>
    //         <Greeting>
    //         <search bar> link to line 12
    //         hamburger button drop-down or profile logo button
    //           <link> for profile page
    //           <link> to admin panel - based on isAdmin

    //       <div> for constellation image? and p1 logo
    //         background constellation css
    //         p1 logo
    //         terminus logo
    //         "Single Source for Platform One Apps"

    //       Switch (Routes??)
    //       Route for profile page
    //         <UserProfile>
    //       Route for publish page
    //         <Admin>
    //       <Active applications> (full color/carousel https://bit.dev/akiran/react-slick/slider)
    //       grid
    //         <all applications>
