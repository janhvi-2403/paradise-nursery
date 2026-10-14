
import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "#plants";
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring nature into your home with our beautiful collection
          of houseplants. Discover the perfect plants to make your
          living space greener, fresher, and more welcoming.
        </p>

        <button
          className="get-started-btn"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
