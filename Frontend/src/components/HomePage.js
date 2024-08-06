// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background-image">
        {/* Background photo */}
      </div>
      <div className="content">
        <h1 className="site-name">HandToHand</h1>
        <div className="quotations">
       
          <p>"Your small contribution can make a big difference."</p>
          <p>"Join us in feeding those who need it most."</p>
        
        </div>
        <Link to="/find-homes" className="get-started-button">Get Started</Link>
      
        <Link to="/add-home" className="get-started-button">Add Your Home</Link>
       
        <Link to="/login" className="get-started-button">Login to Update Home</Link>
        {/* Button/link to navigate to the login page */}
      </div>
    </div>
  );
};

export default HomePage;