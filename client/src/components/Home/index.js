import React from 'react';
import "./Home.css";
import { Card, Button, CardTitle, CardImg, CardBody, CardSubtitle, Container, Row, Col } from 'reactstrap';
import Jumbotron from '../Hero/Hero';
import Table from "../Info/Info";



const Home = (props) => {
	return (
		<Container>
			<Row>
				<Col>
				<Jumbotron />
				</Col>
			</Row>
			<Row>
				<Col>
					<Table />
				</Col>
				<Col md>
					<div id="cardWrapper">
						<Card>
							<CardBody>
							<CardImg id="homeImg" top width="100%" src="https://cdnb.artstation.com/p/assets/images/images/010/246/045/large/seif-ragab-1-seif-ragab.jpg?1523384991" alt="Card image cap" />
							<CardTitle>AUTHENTICATION COMPLETED</CardTitle>
							<CardSubtitle>AI: "Your credentials have been authenticated below." <p><strong>"At anytime you are finished with the dashboard and to ensure your privacy and protection. I can provide optimum security protocols via Logout. Simply
              				select the Logout button below."</strong>
          					</p></CardSubtitle>
							<h3>{props.auth.username}</h3>
							<Button className="logoutButton" onClick={props.handleLogout}>Logout</Button>
							</CardBody>
						</Card>
							{/* <p className="dashboardText">This is your main dashboard Captain!  This is where you can view your Ship and Explorers.
								If you have not selected a ship of your choosing or explorers, then we can do so below.
							</p> */}
						</div>
				</Col>	
			</Row>
		</Container>
	);
};

export default Home;