import React from 'react';
import './home.css';
import Search from "./resources/search";

const Home = () => (
  <div className="page">
    <p>Hi! Thanks for visiting the Lewisham COVID-19 Mutual Aid group website.</p>
    <p>If you're looking for helpful organisations, you can browse the resources menu, or you can search resources by typing something into this box:</p>
    <Search />
    <p>If you're looking for a group to join, please click <a href="find-a-group/search-locally">here</a>.</p>
  </div>
);

export default Home;
