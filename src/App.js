import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the button's state
  const toggleButton = () => {
    console.log(
      `Button clicked. Toggling state. Current state: ${isOn ? "ON" : "OFF"}`
    );
    setIsOn(!isOn);
  };

  useEffect(() => {
    if (isOn) {
      console.log("Button is ON. Setting a random timer to turn it OFF.");

      const randomTimeout = Math.floor(Math.random() * 5000); // Random time between 0 and 5000 ms
      console.log(`Random timeout set: ${randomTimeout}ms`);

      const timer = setTimeout(() => {
        console.log("Random timer triggered. Turning button OFF.");
        setIsOn(false); // Turns it off after the random timeout
      }, randomTimeout);

      // Cleanup the timer when the component unmounts or when the button is turned off
      return () => {
        console.log("Cleanup: Clearing timeout.");
        clearTimeout(timer);
      };
    } else {
      console.log("Button is OFF. No timer is active.");
    }
  }, [isOn]); // Re-run the effect only when isOn changes

  return (
    <div className="container">
      <button
        className="button"
        onClick={toggleButton}
        style={{
          backgroundColor: isOn ? "green" : "red",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default App;
