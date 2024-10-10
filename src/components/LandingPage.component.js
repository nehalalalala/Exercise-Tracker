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
        <h1>Welcome to Synapse</h1>
        <p>Stay motivated and track your fitness journey with ease. Synapse offers a personalized fitness log to monitor your progress, set goals, and stay accountable. Connect with a supportive community of like-minded individuals who share their daily achievements and offer encouragement. Let's make your fitness goals a reality together. </p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
