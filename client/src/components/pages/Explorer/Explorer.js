// ***************** Explorer Selection Page *************** //
// This page is for the player selects which explorer/species they would like to use
// The player will be able to select from 3 distinct species.  Have to find a way to render more than one species
// card on the page

import React from 'react';
import "./Explorer.css";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


const Explorer = (props)=> {
	return (
		<Container>
			<Row>
				<Col>
					<div id="explorerCard">
						<h1 id="explorerHeader">Species 1</h1>
						<h3 id="subHeader">Humanoid</h3>
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
					</Col>
				</Row>

				<Row>
				<Col>
					<div id="explorerCard">
						<h1 id="explorerHeader">Species 2</h1>
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
					</Col>
				</Row>

				<Row>
				<Col>
					<div id="explorerCard">
						<h1 id="explorerHeader">Finorian</h1>
						<h3 id="subHeader">Avian</h3>
						<p>Finorian civilization is one the first space faring species and extremely old. Their early adaptation of being predators, translated well when they were able to reach the stars and construct spacecraft
							to enhance their natural flying ability.  Only with A.I assisted weapon tracking can another species hope to destroy their spacecraft. Upon the discovery of nuclear fission, they nearly wiped themselves 
							when weapons of mass destruction were produced.  A Matriarchal society, the females of the species handle all diplomatic and political decisions.
							They are aggressive, but learned over the hundreds of thousands of years to curb that aggression and demonstrate a reserved nd wise demeanor.  Unfortunately, due to their aggressive nature
							they don't exercise caution in combat and suffer greatly when damage.
							<br></br>
							<strong>Life Span: 350 years</strong>
							<br></br>
							<strong>Ship Evasion with Small Craft: +2</strong>

						</p>
		  				<Card>
								<CardImg top width="100%" src="https://img00.deviantart.net/9cc3/i/2016/120/b/f/avian_aliens_concept_art_by_clearmirror_stillh2o-da0tzlf.jpg" alt="Species 1" />
									<CardBody>
										<CardTitle id="speciesAttributes">Attributes</CardTitle>
										<CardSubtitle id="listAttributes">Crew Attributes</CardSubtitle>
										<CardText>+2 Combat Evasion | Fragile +2 damage when hit during ground combat</CardText>
										<CardSubtitle id="listAttributes">Species Ship Bonus</CardSubtitle>
										<CardText>+4 Ship Evasion</CardText>
										<CardSubtitle id="listAttributes">Planet Side Attributes</CardSubtitle>
										<CardText>Anomalie/Artifact search 2x faster due to the ability to fly. Heightened vision.</CardText>
										<Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select These Explorers</Button>
									</CardBody>
		  					</Card>
		  			</div>
					</Col>
				</Row>
	</Container>
	  );
	};

export default Explorer;
