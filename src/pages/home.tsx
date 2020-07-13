import React from 'react';
import './home.css';
import Search from "./resources/search";

const Home = () => (
  <div className="page">
    <p>If you're looking for help, please email <a href="mailto:lewisham.mutualaid@gmail.com">lewisham.mutualaid@gmail.com</a></p>
    <p>Or, you can find your local group by clicking <a href="find-a-group">here</a>.</p>
    <p>If you're looking for helpful organisations, you can browse the resources menu, or you can search resources by typing something into this box:</p>
    <Search />
  </div>
);

export default Home;
