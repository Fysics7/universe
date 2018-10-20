import React from 'react';
import "./index.css";
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';





const SignIn = (props)=> {
	return (
		<div id="signInForm">
			<h1 id="formHeader">REMNANT</h1>
			<h3 id="subHeader">Lead | Explore | Survive</h3>
			<p><strong>New Pilot? Enlist here:</strong> <Link to = "/signup">Sign Up</Link></p>
			<Form>
				<FormGroup>
					<Label>Email</Label>
					<Input  value = {props.username} onChange = {props.handleChange} name="username" type="email" placeholder="example@email.com" />
				</FormGroup>
				<FormGroup>
					<Label for="userPassword">Password</Label>
					<Input value = {props.password} onChange = {props.handleChange} type="password" name="password" placeholder="password" />
				</FormGroup>
				<Button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</Button>
			</Form>

			{/* <form>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form> */}
		</div>
	);
};

export default SignIn;