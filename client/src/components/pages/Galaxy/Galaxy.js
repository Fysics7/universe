// ***************** Galaxy Selection Page *************** //
// This page will be where the player will select which galaxy they would like to play in
// Player will be able to choose from 3 different galaxies: Spiral (Medium) | Elliptical (Large) | 
// This page appears after the player has selected a species for their captain and crew.
// When user selects the galaxy they would like to play their game in, they will be taken to the SHIPS page next
// onClick (Submit selection for Galaxy) => go to Ships page

import React from 'react';
import "./style.css";
import { Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button } from 'reactstrap';

const Galaxy = (props)=> {
	return (
		<div>
			<div id="galaxyCard">
			<h1 id="galaxyHeader">SPIRAL GALAXY</h1>
			<h3 id="subHeader">Medium Size</h3>
			<p>Background information regarding the gameplay for a medium sized galaxy</p>
		  <Card>
			<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=90" alt="Species 1" />
			<CardBody>
			  <CardTitle id="speciesAttributes">Galaxy Properties</CardTitle>
			  <CardSubtitle id="listAttributes">Length in Light Years (Ly)</CardSubtitle>
			  <CardText>100,000 Light Years</CardText>
			  <Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select This Galaxy</Button>
			</CardBody>
		  </Card>
		  </div>
		</div>
	  );
	};

export default Galaxy;
