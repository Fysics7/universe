// ***************** Game Selection Page *************** //
// This page is basic lore of the game.  This will provide overall reason for the player to do what 
// they will be doing and why it is important for certain actions to be done. 
// Rules / Gameplay mechanics will be explained on this page
// This page is accessible from any of the pages => not tied to any specifc flow

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";

const Game = () => (
    <div className="container">
      <h1>REMNANT: THE LORE
      </h1>
      <p>
        What is going on in solar system that is making your people choose you to be save the day?
      </p>
    </div>
  );
  
  export default Game;