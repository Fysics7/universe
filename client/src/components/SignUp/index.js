import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SignUp = (props) => {
	return (
		<div id="signUpForm">
			<h1 id="formHeader">Account Creation</h1>
			<p>Already have an account? <Link to = "/" >Sign In</Link></p>
			
			<Form>
				<FormGroup>
					<Label for="userEmail">Email</Label>
					<Input type="email" value = {props.username} onChange = {props.handleChange} name="username" id="username" placeholder="example@email.com" />
				</FormGroup>
				<FormGroup>
					<Label for="userPassword">Password</Label>
					<Input type="password" name="password" value = {props.password} onChange = {props.handleChange} id="userPassword" placeholder="password" />
				</FormGroup>
				<FormGroup>
					<Label for="firstName">First Name</Label>
					<Input type="text" value = {props.firstName} onChange = {props.handleChange} name="firstName" id="firstName" placeholder="first name" />
				</FormGroup>
				<FormGroup>
					<Label for="lastName">Last Name</Label>
					<Input type="text" alue = {props.lastName} onChange = {props.handleChange} name="lastName" id="lastName" placeholder="last name" />
				</FormGroup>
				<FormGroup>
					<Label for="captName">Captain's Name</Label>
					<Input type="text" alue = {props.captName} onChange = {props.handleChange} name="captName" id="captName" placeholder="captain's name" />
				</FormGroup>
				<FormGroup>
					<Label for="captBio">Captain Biography</Label>
					<Input type="textarea" alue = {props.captBio} onChange = {props.handleChange} name="text" id="captBio" />
				</FormGroup>
				<Button type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Submit</Button>
			</Form>
		</div>
	);
};

export default SignUp;