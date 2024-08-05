// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background-image">
        {/* Background photo */}
        {/* Replace with your actual background photo or use CSS background-image property */}
      </div>
      <div className="content">
        <h1 className="site-name">HandToHand</h1>
        {/* Design your site name with good typography and styling */}
        <div className="quotations">
          {/* Quotations about donation of food */}
          <p>"Your small contribution can make a big difference."</p>
          <p>"Join us in feeding those who need it most."</p>
          {/* Add more quotations as needed */}
        </div>
        <Link to="/find-homes" className="get-started-button">Get Started</Link>
        {/* Button/link to navigate to the search page */}
        <Link to="/add-home" className="get-started-button">Add Your Home</Link>
        {/* Button/link to navigate to the add home form */}
        <Link to="/login" className="get-started-button">Login to Update Home</Link>
        {/* Button/link to navigate to the login page */}
      </div>
    </div>
  );
};

export default HomePage;
