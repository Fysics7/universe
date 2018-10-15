import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';
import "./style.css";

// TODO: Need to have the navbar present on all the pages and the links to function
// Completed the TODO: but the home page is showing the SiteNav on the bottom of the card


export class SiteNav extends React.Component {

	state = {
		isOpen: false
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="sm" className="mb-5">
					<Container>
						<NavbarBrand href="/">REMNANT</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="/game">
										GAME
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/ships">
										SHIPS
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/explorer">
										EXPLORER
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/galaxy">
										GALAXY
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}






export default SiteNav;