import React, { useState } from 'react';
import img1 from './images/CMTravel.jpeg';
import videoSrc from './images/Video.mp4'; // Import your MP4 file
import './App.css';

function App() {
  const [showDestinations, setShowDestinations] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // Add state to manage video visibility

  const handleSearchDestinations = () => {
    window.open(videoSrc, '_blank'); // Open video in a new tab
    setShowDestinations(false); // Hide destinations if shown
    setShowRecommendations(false); // Hide recommendations if shown
    setShowVideo(false); // Hide video
};

  const handleViewRecommendations = () => {
    setShowDestinations(false); // Hide destinations if shown
    setShowRecommendations(true);
    console.log('View Recommendations button clicked');
  };

  const handleExitVideo = () => {
    setShowVideo(false); // Hide the video
    // Add any additional logic here if needed
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container">
          {/* Image */}
          <img src={img1} className="App-img1" alt="img1" />
          {/* Text Overlay */}
          <div className="text-overlay">
            <p>
              <code>Clinique Monét Travel </code>
            </p>
          </div>
        </div>
        
        <div className="App-buttons">
          {/* Attach event handlers to buttons */}
          <button className="App-button" onClick={handleSearchDestinations}>Search Destinations</button>
          <button className="App-button" onClick={handleViewRecommendations}>View Recommendations</button>
        </div>
        
        {/* Render video if showVideo is true */}
        {showVideo && (
          <div className="video-container">
            <video controls className="fullscreen-video">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Exit button */}
            <button className="Exit-button" onClick={handleExitVideo}>Exit Video</button>
          </div>
        )}

        {/* Render destinations if showDestinations is true */}
        {showDestinations && <p>Destinations: List of destinations...</p>}
        
        {/* Render recommendations if showRecommendations is true */}
        {showRecommendations && <p>Recommendations: List of recommendations...</p>}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
