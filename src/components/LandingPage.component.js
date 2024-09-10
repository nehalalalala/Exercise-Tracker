import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // You can create this CSS file for styling

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home'); // Redirect to the home route
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Welcome to Excercise Tracker</h1>
        <p>Your journey to awesomeness starts here.</p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
