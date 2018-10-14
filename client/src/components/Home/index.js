import React from 'react';
import SiteNav from "../SiteNav"
import { Card, Button, CardTitle, CardText, CardBody, CardSubtitle } from 'reactstrap';
import "./style.css";

const Home = (props) => {
	return (
		<div>
			<SiteNav />
			<div id="cardWrapper">
				<Card>
					<CardBody>
						<CardTitle>Welcome Home</CardTitle>
						<CardSubtitle>Captain</CardSubtitle>
						<CardText>{props.auth.username}</CardText>
						<Button onClick={props.handleLogout}>Logout</Button>
					</CardBody>
				</Card>
			</div>
		</div >
	);
};

export default Home;