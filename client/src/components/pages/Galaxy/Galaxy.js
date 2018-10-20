// ***************** Galaxy Selection Page *************** //
// This page will be where the player will select which galaxy they would like to play in
// Player will be able to choose from 3 different galaxies: Spiral (Medium) | Elliptical (Large) | 
// This page appears after the player has selected a species for their captain and crew.
// When user selects the galaxy they would like to play their game in, they will be taken to the SHIPS page next
// onClick (Submit selection for Galaxy) => go to Ships page

import React from 'react';
import "./Galaxy.css";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button } from 'reactstrap';

const Galaxy = (props)=> {
	return (
		<Container>
			<Row>
				<Col md="4">
					<div id="galaxyCard">
						<h1 id="galaxyHeader">Irregular Galaxy</h1>
							<h3 id="subHeader">Small Size</h3>
								<p>An irregular galaxy is a galaxy that does not have a distinct regular shape, unlike a spiral or an elliptical galaxy.Irregular galaxies are commonly small, about one tenth the mass of the Milky Way galaxy. Due to their small sizes, they are prone to environmental effects like crashing with large galaxies and intergalactic clouds.
									With these smaller galaxies, expect gameplay to be quicker and hostile engagements more immediate.  These galaxies are for those Captain's looking for a challenge.
								</p>
		  						<Card>
									<CardImg top width="100%" src="https://www.le.ac.uk/ph/faulkes/web/images/ngc55.jpg" alt="Irregular" />
									<CardBody>
			 						<CardTitle id="speciesAttributes">Galaxy Properties</CardTitle>
			  						<CardSubtitle id="listAttributes">Length in Light Years (Ly)</CardSubtitle>
			  						<CardText>35,000 Light Years</CardText>
			  						<Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select This Galaxy</Button>
									</CardBody>
		  						</Card>
		  				</div>
				</Col>
							
			
				<Col md="4">
					<div id="galaxyCard">
						<h1 id="galaxyHeader">Spiral Galaxy</h1>
							<h3 id="subHeader">Medium Size</h3>
								<p>Most spiral galaxies consist of a flat, rotating disk containing stars, gas and dust, and a central concentration of stars known as the bulge. These are often surrounded by a much fainter halo of stars, many of which reside in globular clusters.
								Spiral galaxies are named by their spiral structures that extend from the center into the galactic disc. The spiral arms are sites of ongoing star formation and are brighter than the surrounding disc because of the young, hot OB stars that inhabit them.
								A Spiral Galaxy game allows the Captain to gather enough resources, upgrade weapons, and train crew before engaging in first hostile encounter.  This game is considered a "Normal" challenge.</p>
		  						<Card>
								  <CardImg top width="100%" src="https://www.as.arizona.edu/sites/default/files/styles/gallery_large/public/n5033s.jpg?itok=EAj6cUyK" alt="Species 1" />
									<CardBody>
			  					<CardTitle id="speciesAttributes">Galaxy Properties</CardTitle>
			  					<CardSubtitle id="listAttributes">Length in Light Years (Ly)</CardSubtitle>
			  					<CardText>100,000 Light Years</CardText>
			  					<Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select This Galaxy</Button>
									</CardBody>
		  					</Card>
		  				</div>
						</Col>
					

			
				<Col md="4">
					<div id="galaxyCard">
						<h1 id="galaxyHeader">Elliptical Galaxy</h1>
							<h3 id="subHeader">Large Size</h3>
								<p>An elliptical galaxy is a type of galaxy having an approximately ellipsoidal shape and a smooth, nearly featureless image. Unlike flat spiral galaxies with organization and structure, elliptical galaxies are more three-dimensional, without much structure, and their stars are in somewhat random orbits around the center. 
								Elliptical galaxies range in size from tens of millions to over one hundred trillion stars.  These galaxies are HUGE and a typical game play session will be quite longer.
								You will have a longer time to reach mid and end game levels, however, so will your opponents.  This is a much easier pace game play challenge and will require a lot of time to complete.
								</p>
		  				<Card>
						  <CardImg top width="100%" src="http://www.technovelgy.com/graphics/content10/bubble-galaxy-ngc3521.jpg" alt="Species 1" />
							<CardBody>
			  			<CardTitle id="speciesAttributes">Galaxy Properties</CardTitle>
			  			<CardSubtitle id="listAttributes">Length in Light Years (Ly)</CardSubtitle>
			  			<CardText>400,000 Light Years</CardText>
			  			<Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select This Galaxy</Button>
							</CardBody>
		  			</Card>
		  		</div>
				</Col>
			</Row>
	</Container>
			
	  );
	};
	
	export default Galaxy;
	