import React, { useState, useEffect} from 'react'
import './App.css'

function Timer() {
// Initial time set to 5 minutes (300 seconds)
  const initialTime = 5 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // Exit early when we reach 0
    if (!timeLeft) {
      // Reset timer
      setTimeLeft(initialTime);
      return;
    }

    // Save intervalId to clear the interval when the component unmounts
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Format timeLeft into minutes and seconds
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="Timer">
        <div id="timer-msg">Show this voucher to bar staff.</div>
        <div id="countdown">{formatTime()}</div>
        <div id="countdown-msg">Time remaining</div>
    </div>
  );
}

export default Timer;