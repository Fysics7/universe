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
						<p>Humans are a young species but possess a general inquisitive natue, high intelligence, but can only tolerate certain environments with the use of technology.
							Being social by nature, humans thrive in community settings.  Hence, they attachmnent to medium to large spacecraft where crew attachments can evolve and teamwork is optimal.
							Humans have integrated AI and genetic modification into their society and themselves with high restraint and control.  This has enabled humans to surpass their physical impediments for long space flight. 
							<br></br>
							<strong>Life Span: 200 years</strong>
							<strong>Natural Explorers +1 search on any environment</strong>
							
						</p>
		  				<Card>
								<CardImg top width="100%" src="https://onextrapixel.com/wp-content/uploads/2017/03/epiphany-iii.jpg" alt="Species 1" />
									<CardBody>
										<CardTitle id="speciesAttributes">Attributes</CardTitle>
										<CardSubtitle id="listAttributes">Crew Attributes</CardSubtitle>
										<CardText>Natural Explores +1 artifact search on all planet environments</CardText>
										<CardSubtitle id="listAttributes">Species Ship Bonus</CardSubtitle>
										<CardText>+2 Combat with Large Ships</CardText>
										<CardSubtitle id="listAttributes">Planet Side Attributes</CardSubtitle>
										<CardText>+2 Combat when sending 3 or more crew members planet side</CardText>
										<Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select These Explorers</Button>
									</CardBody>
		  					</Card>
		  			</div>
					</Col>
				

				
				<Col>
					<div id="explorerCard">
						<h1 id="explorerHeader">X'ia</h1>
						<h3 id="subHeader">Amphibian</h3>
						<p>The enigmatic, scientific, arrogant, and self-absorbed species, called the X'ia are about as old as the Finorians, but evolved on a more humid and tropical planet.
							Their home planet of Zaku is anything short of a paradise world.  The X'ia evolved under intense heat and atmospheric pressure allowing them to be more tolerable of higher 
							temperature planets and environments.  They have a high physical regeneration rate, allowing for quick recovery from wounds and illness.  Their curiosity led them to be more technological and engineer minded.
							With this technology, the X'ia developed exosuits which aid in mobility, hardiness, and combat.  Linking with AI combat protocols, the X'ia, become formidable
							combatants, heightened apprehension and anticipation.
							<br></br>
							<strong>Life Span: 300 years</strong>
							<br></br>
							+2 Combat with Medium Ship
						</p>
		  				<Card>
								<CardImg top width="100%" src="https://orig00.deviantart.net/bc64/f/2013/189/6/b/alien_dude_4_by_nero_tbs-d6cid45.jpg" alt="Species 2" />
									<CardBody>
										<CardTitle id="speciesAttributes">Attributes</CardTitle>
										<CardSubtitle id="listAttributes">Crew Attributes</CardSubtitle>
										<CardText>+2 Ship Repair | Search anomalies x2 faster on hot, humid, or high G planets</CardText>
										<CardSubtitle id="listAttributes">Species Ship Bonus</CardSubtitle>
										<CardText>+1 Ship hull repair per 3 turns | +1 Target Tracking</CardText>
										<CardSubtitle id="listAttributes">Planet Side Attributes</CardSubtitle>
										<CardText>+2 Ground Combat | </CardText>
										<Button id="button" type = 'submit' name = "select" onClick = {props.handleSubmit}>Select These Explorers</Button>
									</CardBody>
		  					</Card>
		  			</div>
					</Col>
				

				
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
							<strong>Life Span: 250 years</strong>
							<br></br>
							<strong>Ship Evasion with Small Craft: +2</strong>

						</p>
		  				<Card>
								<CardImg top width="100%" src="https://img00.deviantart.net/9cc3/i/2016/120/b/f/avian_aliens_concept_art_by_clearmirror_stillh2o-da0tzlf.jpg" alt="Species 3" />
									<CardBody>
										<CardTitle id="speciesAttributes">Attributes</CardTitle>
										<CardSubtitle id="listAttributes">Crew Attributes</CardSubtitle>
										<CardText>+2 Combat Evasion | Fragile +2 damage when hit during ground combat</CardText>
										<CardSubtitle id="listAttributes">Species Ship Bonus</CardSubtitle>
										<CardText>+3 Ship Evasion</CardText>
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
