// ***************** Explorer Selection Page *************** //
// This page is for the player selects which explorer/species they would like to use
// The player will be able to select from 3 distinct species.  Have to find a way to render more than one species
// card on the page

import React from 'react';
import "./style.css";
import { Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button } from 'reactstrap';

const Explorer = (props)=> {
	return (
		<div>
			<div id="explorerCard">
			<h1 id="explorerHeader">Species 1</h1>
			<h3 id="subHeader">Reptilian</h3>
			<p>Species Background Goes Here =></p>
		  <Card>
			<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=90" alt="Species 1" />
			<CardBody>
			  <CardTitle id="speciesAttributes">Attributes</CardTitle>
			  <CardSubtitle id="listAttributes">Crew Attributes</CardSubtitle>
			  <CardText>Text regarding Crew bonuses.</CardText>
			  <CardSubtitle id="listAttributes">Species Ship Bonus</CardSubtitle>
			  <CardText>Text regarding Ship bonuses.</CardText>
			  <CardSubtitle id="listAttributes">Planet Side Attributes</CardSubtitle>
			  <CardText>Text regarding Crew bonus when Planet Side</CardText>
			  <Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select These Explorers</Button>
			</CardBody>
		  </Card>
		  </div>
		</div>
	  );
	};

export default Explorer;
