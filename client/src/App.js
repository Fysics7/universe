import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
// Added the pages imports 
import SiteNav from "./components/SiteNav";
import Explorer from "./components/pages/Explorer";
import Galaxy from "./components/pages/Galaxy";
import Game from "./components/pages/Game";
import Ships from "./components/pages/Ships";

class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId: "",
      username: "",
      isAuthenticated: false
    }
  };

  componentWillMount() {
    axios.get("/auth/isAuthenticated").then(result => {
      const { userId, isAuthenticated, username } = result.data;
      this.setState({
        auth: {
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lasName: this.state.lastName,
      captName: this.state.captName,
      captBio: this.state.captBio
    };
    this.setState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      captName: "",
      captBio: ""
    });
    const { name } = event.target;
    axios.post(name, newUser).then(data => {
      if (data.data.isAuthenticated) {
        const { userId, isAuthenticated, username } = data.data;
        this.setState({
          auth: {
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  };

  handleLogout = event => {
    event.preventDefault();
    axios.get("/auth/logout").then(result => {
      this.setState({
        auth: {
          userId: "",
          username: "",
          firstName: "",
          lastName: "",
          captName: "",
          captBio: "",
          isAuthenticated: false
        }
      });
    });
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => {
              if (loggedIn) {
                return <Redirect to="/home" />;
              } else {
                return (
                  <SignIn
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    email={this.state.email}
                    password={this.state.password}
                  />
                );
              }
            }}
          />
          <Route
            exact
            path="/signup"
            render={() => {
              if (loggedIn) {
                return <Redirect to="/home" />;
              } else {
                return (
                  <SignUp
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    email={this.state.email}
                    password={this.state.password}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    captName={this.state.captName}
                    captBio={this.state.captBio}
                  />
                );
              }
            }}
          />
          <Route
            exact
            path="/home"
            render={() => {
              if (!loggedIn) {
                return <Redirect to="/" />;
              } else {
                return (
                  <Home
                    handleLogout={this.handleLogout}
                    auth={this.state.auth}
                  />
                );
              }
            }}
          />
          {/* Added component routes for the pages */}
          {/* <Route expath="/explorer" component={Explorer} /> <= THIS CODE RENDERS EXPLORER PAGE ON HOME PAGE - Comment out to see this work*/}
          <div>
          <SiteNav />
          <Route exact path="/explorer" component={Explorer} />
          <Route exact path="/galaxy" component={Galaxy} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/ships" component={Ships} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
