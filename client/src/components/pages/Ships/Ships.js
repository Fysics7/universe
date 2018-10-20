// ***************** Ships Selection Page *************** //
// This is where the player will select their ship before starting the game
// Player will be able to select from 3 ships that will be rendered on this page
// Once a ship is selected, the player will be taken to the PLAY page => How to send players to the PLAY SCREEN

// Thoughts: Will have to make a component for each item on the PLAY => The feature items on the PLAY page will
// come from individual components linked to the PLAY page: Player Ship Area | Enemy Encounter Area, Fire Button, Evade Button,
// Special Button - Need to lock in the flow and functionality of the pages.  Logic will have to come later for actual
// gameplay


import React from 'react';
import "./Ships.css";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button } from 'reactstrap';



const Ships = (props)=> {
	return (
		<Container>
			<Row>
				<Col>
					<div id="shipsCard">
					<h1 id="shipsHeader">Large Ship</h1>
						<h3 id="subHeader">Capital Ship Class</h3>
          				<h3 id="subHeader">DOMINATOR</h3>
							<p>Background Info Here</p>
		  					<Card>
								<CardImg top width="100%" src="https://t00.deviantart.net/vBZhR30GX_QBQZel6O2K-k1EQBQ=/500x250/filters:fixed_height(100,100):origin()/pre00/09f6/th/pre/f/2017/355/7/2/kalarian_battleship_shark_class_by_era_7-dbxewed.jpg" alt="Ship 1" />
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
										<CardText>10 crew members (1 Medical / 3 Engineers / 3 Scientists / 3 Combat Specialists)</CardText>
									<Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select This Ship and Start Game</Button>
								</CardBody>
		  					</Card>
		  			</div>
				</Col>
			

			
				<Col>
					<div id="shipsCard">
					<h1 id="shipsHeader">Medium Ship </h1>
						<h3 id="subHeader">Frigate Ship Class</h3>
            <h3 id="subHeader">VALKYRIE</h3>
							<p>Background information about the ship</p>
		  					<Card>
								<CardImg top width="100%" src="https://t00.deviantart.net/wiN05BV4qo8vnzX52XdE5M7mh30=/700x350/filters:fixed_height(100,100):origin()/pre00/e618/th/pre/i/2014/053/f/e/mourning_wolf_by_0_hr-d77lt6o.png" alt="Species 1" />
								<CardBody>
			  					<CardTitle id="shipAttributes">Ship Properties</CardTitle>
										<CardSubtitle id="listAttributes">Hull Strength (Ly)</CardSubtitle>
										<CardText id="shipText">300 Hitpoints</CardText>
              		<CardTitle id="shipAttributes">Top Interstellar Speed</CardTitle>
										<CardSubtitle id="listAttributes">35 Light Years (Ly)</CardSubtitle>
										<CardText>Evasion 5 (1-10)</CardText>
              		<CardTitle id="shipAttributes">Sublight Cruising Speed (1-10)</CardTitle>
										<CardSubtitle id="listAttributes">Speed of 5</CardSubtitle>
										<CardText>Weapon Damage: 50</CardText>
              		<CardTitle id="shipAttributes">Weapons</CardTitle>
										<CardSubtitle id="listAttributes">Beam Weapons | Missiles</CardSubtitle>
										<CardText>2 attacks</CardText>
              		<CardTitle id="shipAttributes">Crew Size | Composition</CardTitle>
										<CardSubtitle id="listAttributes"></CardSubtitle>
										<CardText>5 crew members (1 Medic / 1 Scientist / 2 Engineers / 1 Combat Specialist)</CardText>
              		<Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select This Ship and Start Game</Button>
									</CardBody>
		  						</Card>
		  			</div>
				</Col>
			

		
				<Col>	
					<div id="shipsCard">
					<h1 id="shipsHeader">Small Ship </h1>
						<h3 id="subHeader">Small Ship Class</h3>
            <h3 id="subHeader">WASP</h3>
							<p>Background information about the ship</p>
		  					<Card>
								<CardImg top width="100%" src="https://img00.deviantart.net/9400/i/2015/153/b/4/frigate_by_zacharymadere-d8vquee.jpg" alt="Species 1" />
								<CardBody>
			  					<CardTitle id="shipAttributes">Ship Properties</CardTitle>
										<CardSubtitle id="listAttributes">Hull Strength (Ly)</CardSubtitle>
										<CardText id="shipText">185 Hitpoints</CardText>
              		<CardTitle id="shipAttributes">Top Interstellar Speed</CardTitle>
										<CardSubtitle id="listAttributes">100 Light Years (Ly)</CardSubtitle>
										<CardText>Evasion 7 (1-10)</CardText>
              		<CardTitle id="shipAttributes">Sublight Speed (1-10)</CardTitle>
										<CardSubtitle id="listAttributes">Speed of 8</CardSubtitle>
										<CardText>Weapon Damage: 30</CardText>
              		<CardTitle id="shipAttributes">Weapons</CardTitle>
										<CardSubtitle id="listAttributes">Beam Weapons</CardSubtitle>
										<CardText>1 attacks (2 attacks per turn)</CardText>
              		<CardTitle id="shipAttributes">Crew Size | Composition</CardTitle>
										<CardSubtitle id="listAttributes"></CardSubtitle>
										<CardText>3 crew members (1 Medic / 1 Scientist / 1 Engineers)</CardText>
              		<Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select This Ship and Start Game</Button>
									</CardBody>
		  					</Card>
		  			</div>		
					</Col>
				</Row>
		</Container>
	  );
	};
	
export default Ships;