import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Timestamp from '../../components/timestamp/Timestamp.jsx';
import KanyeFace from '../../assets/KanyeFace.jpg';
import KimFace from '../../assets/KimFace.jpg';
import PeteFace from '../../assets/PeteFace.jpg';

function Game() {
  const [faces] = useState([KanyeFace, KimFace, PeteFace]);
  const [slots, setSlots] = useState([KanyeFace, KanyeFace, KanyeFace]);
  const [running, setRunning] = useState([true, true, true]); // Array to control each slot separately

  useEffect(() => {
    const intervals = slots.map((_, index) =>
      setInterval(() => {
        if (running[index]) {
          setSlots(prevSlots => 
            prevSlots.map((slot, slotIndex) => 
              slotIndex === index ? faces[Math.floor(Math.random() * faces.length)] : slot
            )
          );
        }
      }, 100)
    );

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [running, faces]);

  const handleStopClick = (index) => {
    setRunning(prevRunning => prevRunning.map((run, idx) => idx === index ? false : run));
  };

  const handleReset = () => {
    setSlots([KanyeFace, KanyeFace, KanyeFace]); // Reset slots to the initial state
    setRunning([true, true, true]); // Enable all slots to run again
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
        <h1>Kanye Game</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {slots.map((slot, index) => (
            <div key={index}>
              <img src={slot} style={{ width: '100px', height: '100px', margin: '0 10px' }} alt="Slot Face" />
              {running[index] && <button onClick={() => handleStopClick(index)} style={{ display: 'block' }}>Stop</button>}
            </div>
          ))}
        </div>
        {running.every(run => !run) && 
          <div>
            <button onClick={handleReset} style={{ marginTop: '20px' }}>Try Again</button>
            {new Set(slots).size === 1 && alert('Congrats! You won the Kanye Game.')}
          </div>
        }
      </div>
      <Timestamp />
    </div>
  );
}

export default Game;
