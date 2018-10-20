import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import "./Wow.css";

const items = [
  {
    src: 'https://nofilmschool.com/sites/default/files/styles/article_wide/public/atropa_concept_art.jpg?itok=lnzFwBdE',
    altText: 'LEAD',
    caption: 'Using your Commanding skills, you will have to manage the welfare of your ship, crew, and galactic navigation choices',
    header: 'LEAD'
  },
  {
    src: 'https://pre00.deviantart.net/1d18/th/pre/i/2012/292/e/3/another_earth_with_planets_by_johndoop-d5iap3z.jpg',
    altText: 'EXPLORE',
    caption: 'You must explore star systems and planets in your galaxy to retrieve ancient artifacts so your scientists can build "The Solution" to stop your star from going SUPERNOVA',
    header: 'EXPLORE'
  },
  {
    src: 'http://coolvibe.com/wp-content/uploads/2011/04/warhounds-992x604.jpg',
    altText: 'SURVIVE',
    caption: 'You decide which planets and how many crew members to send to the surface to investigate clues.  With a finite number of resources: fuel, crew, munitions, and supplies, your commanding skills will be put to the test.',
    header: 'SURVIVE'
  },
  {
    src: 'https://onextrapixel.com/wp-content/uploads/2017/03/epiphany-iii.jpg',
    altText: 'HOPE',
    caption: 'It is the year 2389 and your species can traverse the galaxy, scientists are making medical/genetic advances, and prosperity is prevalent.  A Golden Age for your civilization.  Disaster awaits and you are the only hope.',
    header: 'HOPE'
  }
];

const Show = () => <UncontrolledCarousel items={items} />;

export default Show;