// ***************** Game Selection Page *************** //
// This page is basic lore of the game.  This will provide overall reason for the player to do what 
// they will be doing and why it is important for certain actions to be done. 
// Rules / Gameplay mechanics will be explained on this page
// This page is accessible from any of the pages => not tied to any specifc flow

import React from "react";
import "./Game.css";
import { Container, Row, Col } from "reactstrap";
import UncontrolledCarousel from "../Wow/Wow";


const Game = () => (
    <Container id="carouselStyle">
      <Row>
        <Col>
        <UncontrolledCarousel />
        </Col>
      </Row>
    </Container>
  );
  
  export default Game;