// ***************** Ships Selection Page *************** //
// This is where the player will select their ship before starting the game
// Player will be able to select from 3 ships that will be rendered on this page
// Once a ship is selected, the player will be taken to the PLAY page => How to send players to the PLAY SCREEN

// Thoughts: Will have to make a component for each item on the PLAY => The feature items on the PLAY page will
// come from individual components linked to the PLAY page: Player Ship Area | Enemy Encounter Area, Fire Button, Evade Button,
// Special Button - Need to lock in the flow and functionality of the pages.  Logic will have to come later for actual
// gameplay


import React from 'react';
import "./style.css";
import { Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button } from 'reactstrap';



const Ships = (props)=> {
	return (
		<div>
			<div id="shipsCard">
			<h1 id="shipsHeader">LARGE SHIP </h1>
			<h3 id="subHeader">Capital Ship Class</h3>
            <h3 id="subHeader">DOMINATOR</h3>
			<p>Background information about the ship</p>
		  <Card>
			<CardImg top width="100%" src="https://vignette.wikia.nocookie.net/elite-dangerous/images/c/c1/Farragut-Battle-Cruiser-Surface.png/revision/latest/scale-to-width-down/200?cb=20171101230454" alt="Large Ship" />
			<CardBody>
			  <CardTitle id="shipAttributes">Ship Properties</CardTitle>
			  <CardSubtitle id="listAttributes">Hull Strength</CardSubtitle>
			  <CardText id="shipText">1000 Hitpoints</CardText>
              <CardTitle id="shipAttributes">Top Interstellar Speed</CardTitle>
			  <CardSubtitle id="listAttributes">5 Light Years (Ly)</CardSubtitle>
			  <CardText>Evasion: 1 (1-10)</CardText>
              <CardTitle id="shipAttributes">Sublight Cruising Speed (1-10)</CardTitle>
			  <CardSubtitle id="listAttributes">Speed of 2</CardSubtitle>
			  <CardText>Weapon Damage: 100</CardText>
              <CardTitle id="shipAttributes">Weapons</CardTitle>
			  <CardSubtitle id="listAttributes">Beam Weapons | Missiles | Torpedoes</CardSubtitle>
			  <CardText>3 Attacks</CardText>
              <CardTitle id="shipAttributes">Crew Size | Composition</CardTitle>
			  <CardSubtitle id="listAttributes"></CardSubtitle>
			  <CardText>10 crew members</CardText>
              
			  <Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select This Ship and Start Game</Button>
			</CardBody>
		  </Card>
		  </div>

			<div id="shipsCard">
			<h1 id="shipsHeader">MEDIUM SHIP </h1>
			<h3 id="subHeader">Frigate Ship Class</h3>
            <h3 id="subHeader">VALKYRIE</h3>
			<p>Background information about the ship</p>
		  <Card>
			<CardImg top width="100%" src="https://t00.deviantart.net/22z6uxux0fzOBBedG_p_mWsxH-s=/700x350/filters:fixed_height(100,100):origin()/pre00/2c2b/th/pre/i/2013/056/4/4/starship_frigate_by_emppyrean-d5w623l.png" alt="Species 1" />
			<CardBody>
			  <CardTitle id="shipAttributes">Ship Properties</CardTitle>
			  <CardSubtitle id="listAttributes">Hull Strength (Ly)</CardSubtitle>
			  <CardText id="shipText">300 Hitpoints</CardText>
              <CardTitle id="shipAttributes">Top Interstellar Speed</CardTitle>
			  <CardSubtitle id="listAttributes">5 Light Years (Ly)</CardSubtitle>
			  <CardText>100,000 Light Years</CardText>
              <CardTitle id="shipAttributes">Sublight Speed (1-10)</CardTitle>
			  <CardSubtitle id="listAttributes">Speed of 2</CardSubtitle>
			  <CardText>100,000 Light Years</CardText>
              <CardTitle id="shipAttributes">Weapons</CardTitle>
			  <CardSubtitle id="listAttributes">Beam Weapons | Missiles | Torpedoes</CardSubtitle>
			  <CardText>100,000 Light Years</CardText>
              <CardTitle id="shipAttributes">Crew Size | Composition</CardTitle>
			  <CardSubtitle id="listAttributes"></CardSubtitle>
			  <CardText>10 crew members</CardText>
              
			  <Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select This Ship and Start Game</Button>
			</CardBody>
		  </Card>
		  </div>

			<div id="shipsCard">
			<h1 id="shipsHeader">Small Ship </h1>
			<h3 id="subHeader">Small Ship Class</h3>
            <h3 id="subHeader">WASP</h3>
			<p>Background information about the ship</p>
		  <Card>
			<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=90" alt="Species 1" />
			<CardBody>
			  <CardTitle id="shipAttributes">Ship Properties</CardTitle>
			  <CardSubtitle id="listAttributes">Hull Strength (Ly)</CardSubtitle>
			  <CardText id="shipText">300 Hitpoints</CardText>
              <CardTitle id="shipAttributes">Top Interstellar Speed</CardTitle>
			  <CardSubtitle id="listAttributes">5 Light Years (Ly)</CardSubtitle>
			  <CardText>100,000 Light Years</CardText>
              <CardTitle id="shipAttributes">Sublight Speed (1-10)</CardTitle>
			  <CardSubtitle id="listAttributes">Speed of 2</CardSubtitle>
			  <CardText>100,000 Light Years</CardText>
              <CardTitle id="shipAttributes">Weapons</CardTitle>
			  <CardSubtitle id="listAttributes">Beam Weapons | Missiles | Torpedoes</CardSubtitle>
			  <CardText>100,000 Light Years</CardText>
              <CardTitle id="shipAttributes">Crew Size | Composition</CardTitle>
			  <CardSubtitle id="listAttributes"></CardSubtitle>
			  <CardText>10 crew members</CardText>
              
			  <Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select This Ship and Start Game</Button>
			</CardBody>
		  </Card>
		  </div>
		</div>
	  );
	};

export default Ships;