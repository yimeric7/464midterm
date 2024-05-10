import React, { useState, useEffect } from 'react';
import './Timestamp.css'; // Importing the CSS for styling

function Timestamp() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update the date and time every second

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="timestamp">
      {currentDateTime.toLocaleTimeString()} {currentDateTime.toDateString()}
    </div>
  );
}

export default Timestamp;
