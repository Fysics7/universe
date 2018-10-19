import React from 'react';
import "./Hero.css";
import { Jumbotron, Container, Button } from 'reactstrap';

const Hero = (props) => {
  return (
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-2">"Greetings Captain!"</h1>
          <p className="lead">"Let me introduce myself. I am your integrated Artificial Intelligence.  I am here to aid our 
          very important mission to find the artifacts that will aid our scientists to create a device to stop our system's star
          from going Supernova.  This is a huge responsibility, but I know you are up to the task. "Since you and I are integrated, what you see, I see Captain.  So, this is your initial information dashboard.
          Here, you will select which species in our solar system that you will aid, select your ship, and select the galaxy you would 
          like to explore. Please don't ask how that is possible."</p>
          <p className="lead">
          <Button color="primary">START GAME</Button>
        </p>        
        </Container>
      </Jumbotron>
  );
};

export default Hero;