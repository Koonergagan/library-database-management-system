import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingPage.css';

const Landing = () => {
  return (
    <div className='landing-page'>
<div className="background-overlay">
        <div className="content">
          <h1 className="heading">Welcome to <span className="library-name">The Book Heaven</span></h1>
      
          <p className="subheading">Your Gateway to Knowledge, Imagination, and Adventure.</p>
          <div className="cta-buttons">
            <button className="cta-button login-button">
          
      <Link to="/login">Login</Link></button>
      <br />
      <button className="cta-button register-button">
      <Link to="/register">register</Link></button>
      <br />
      <button className="cta-button login-button">
      <Link to="/inventory">Inventory</Link></button>
    </div>
    </div>
    </div>
    </div>
    
  );
};

export default Landing;
