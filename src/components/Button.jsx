import React, { useState } from "react";
import TrackDelivery from '../components/TrackDelivery';

const Button = ({ styles }) => {
  const [showTrackDelivery, setShowTrackDelivery] = useState(false); // State to track whether to show TrackDelivery component

  const handleClick = () => {
    // Load new file logic here
    console.log("Button clicked, loading new file...");
    setShowTrackDelivery(true); // Set showTrackDelivery to true when button is clicked
  };

  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        onClick={handleClick} // Add onClick event handler
      >
        Track Delivery
      </button>

      {showTrackDelivery && <TrackDelivery />} {/* Conditionally render TrackDelivery component based on showTrackDelivery state */}
    </>
  );
};

export default Button;
