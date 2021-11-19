import React from "react";
import "./App.css";
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

function App() {
  return (
    <div>
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
      <AllApps/>
    </div>
  );
}

export default App;
