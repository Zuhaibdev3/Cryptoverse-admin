import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
    return `${hours}h:${minutes < 10 ? "0" : ""}${minutes}m:${
      sec < 10 ? "0" : ""
    }${sec}s left`;
  };

  return (
    <div className="timer-box">
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
};

const Timer = () => {
  return (
    <div>
      <CountdownTimer initialTime={13605} />{" "}
      {/* 3605 seconds = 1 hour, 5 seconds */}
    </div>
  );
};

export default Timer;
