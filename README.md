# REMNANT

## Description
In astronomy, the structure which results from the explosion of a star in a supernova is called the, "Supernova REMNANT!" This MERN application will allow players to create a Captain, pick a species, and select a spaceship to explore a galaxy!
This is a Role-Playing-Game that will test the limits of your leadership, your crew management, and your ship, as you traverse each star system searching for valuable artifacts.  These artifacts will be used to create a solution to prevent your home systems' star from going Super Nova and destroying your home planet and everything else in the system.

You and your crew are your people's last hope for avoiding this terrible disaster.  The clock is ticking until the star goes Supernova; so be sure to take care of your ship, your crew, and take care of that weaponry, because space is a dangerous place!

## Overview
Since this is the final project of the coding bootcamp, I wanted to build something that reflected my passion for coding, space, science fiction, and learning the nuances of programming.  That passion is to eventually design and build video games. When I first approached the idea for this project, I went back to a board game that I designed with some fellow students that utilized some of the same mechanics.  

## Technologies Used
- React
- JSX
- Yarn
- Google Fonts
- Reactstrap
- MongoDB
- Mongoose
- Express
- Passport



# Installation Instructions
## Pre-Instructions =>
- Instructions are for macOS 
- Install MongoDB

1. Fork the github repository `universe` and then clone the forked repository to your computer via VSCode or any other text editor.
2. In your main terminal (Assuming you have MongoDB installed), at command prompt, type `mongod`.  Leave the terminal window up.  
3. In your text editor, open a terminal and type: `mongo`.
4. Open another terminal within the text editor (for VSCode, select the `+` symbol) and you will now want to install "yarn" via homebrew: `brew install yarn` =>  this will install yarn and Node.js if you don't have it.
5. After yarn has been installed, in that same terminal we need to install all the dependencies that React will need to run properly.  For this full stack application, there is a front and back end properties that enable the application to work as intended.  In React, you need to install these particular dependencies: `package.json` for the client and server side.  There is a script that was created and embedded in the `package.json` in the repository you just cloned. This script will install the client side dependencies without having to navigate to the client folder.  Type the following at the command prompt: `npm run client-install`. This will automatically install the dependencies on the client side.  
6. Next you need to install the dependencies on the server side.  Go to the root folder of the project within the text editor, right click, select `Open in terminal`. At the command prompt, type: `npm install`.
7. When that is completed, open another terminal within the editor, via the `+` (Should have a total of 3 terminals in the editor: node, bash, mongo) and `cd` to the `universe` repository folder, if need be.  Type at the command prompt: `yarn start`.  If successful react will automatically open a browser window in Chrome at `http://localhost:3000` and you should see the application.

## Continued Development Features
This project will continue to evolve and upgrade as more time and technologies are introduced to make the game reflect its potential and vision in its entirety.
