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
								<p>Background information regarding the gameplay for a medium sized galaxy</p>
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
								<p>Background information regarding the gameplay for a medium sized galaxy</p>
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
						<h1 id="galaxyHeader">Eliptical Galaxy</h1>
							<h3 id="subHeader">Large Size</h3>
								<p>Background information regarding the gameplay for a medium sized galaxy</p>
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
	