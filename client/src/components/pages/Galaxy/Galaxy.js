// ***************** Galaxy Selection Page *************** //
// This page will be where the player will select which galaxy they would like to play in
// Player will be able to choose from 3 different galaxies: Spiral (Medium) | Elliptical (Large) | 
// This page appears after the player has selected a species for their captain and crew.
// When user selects the galaxy they would like to play their game in, they will be taken to the SHIPS page next
// onClick (Submit selection for Galaxy) => go to Ships page

import React from 'react';
import "./style.css";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button } from 'reactstrap';

const Galaxy = (props)=> {
	return (
		<Container>
			<Row>
			<Col xs="6" sm="4">
						<div id="galaxyCard">
							<h1 id="galaxyHeader">ELIPTICAL GALAXY</h1>
								<h3 id="subHeader">Large Size</h3>
									<p>Background information regarding the gameplay for a medium sized galaxy</p>
		  								<Card>
												<CardImg top width="100%" src="http://www.umich.edu/~gs265/spiral.jpg" alt="Eliptical" />
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
			<Row>
			<Col xs="6" sm="4">
					<div id="galaxyCard">
						<h1 id="galaxyHeader">SPIRAL GALAXY</h1>
							<h3 id="subHeader">Medium Size</h3>
								<p>Background information regarding the gameplay for a medium sized galaxy</p>
		  						<Card>
									<CardImg top width="100%" src="https://www.spaceanswers.com/wp-content/uploads/2015/01/Screen-Shot-2015-01-12-at-14.26.52.png" alt="Spiral" />
									<CardBody>
			  					<CardTitle id="speciesAttributes">Galaxy Properties</CardTitle>
			  					<CardSubtitle id="listAttributes">Length in Light Years (Ly)</CardSubtitle>
			  					<CardText>100,000 Light Years</CardText>
			  					<Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select This Galaxy</Button>
									</CardBody>
		  					</Card>
		  				</div>
						</Col>
					</Row>

				<Row>
				<Col sm="4">
					<div id="galaxyCard">
						<h1 id="galaxyHeader">IRREGULAR GALAXY</h1>
							<h3 id="subHeader">Small Size</h3>
								<p>Background information regarding the gameplay for a medium sized galaxy</p>
		  				<Card>
							<CardImg top width="100%" src="http://cdn.sci-news.com/images/2017/04/image_4802-NGC-7250.jpg" alt="Irregular" />
							<CardBody>
			  			<CardTitle id="speciesAttributes">Galaxy Properties</CardTitle>
			  			<CardSubtitle id="listAttributes">Length in Light Years (Ly)</CardSubtitle>
			  			<CardText>40,000 Light Years</CardText>
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
	