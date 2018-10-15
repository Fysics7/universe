import React from 'react';
import SiteNav from "../SiteNav"
import { Card, Button, CardTitle, CardText, CardBody, CardSubtitle } from 'reactstrap';
import "./style.css";



const Home = (props) => {
	return (
		<div>

			{/* <SiteNav /> */}
			{/* Commented out SiteNav because it will show up on the home page at top which is fine
			but, it will be getting rendered twice on this page.  Have to figure out a workaround */}
			
			<div id="cardWrapper">
				<Card>
					<CardBody>
						<CardTitle>AI Assistant: "Welcome Captain"</CardTitle>
						<CardSubtitle>AI: "Your credentials have been authenticated below."</CardSubtitle>
						<CardText>{props.auth.username}</CardText>
						<Button className="logoutButton" onClick={props.handleLogout}>Logout</Button>
					</CardBody>
				</Card>
				<p className="dashboardText">This is your main dashboard Captain!  This is where you can view your Ship and Explorers.
					If you have not selected a ship of your choosing or explorers, then we can do so below.
				</p>
			</div>
		</div >
	);
};

export default Home;