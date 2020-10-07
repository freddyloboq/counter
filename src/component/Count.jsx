import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";

const Count = () => {
  let [hours, setHours] = useState(0);
  let [minute, setMinute] = useState(0);
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(function () {
      setSeconds((seconds) => seconds + 1);
    }, 1);
  }, []);
  if (seconds === 60) {
    setSeconds((seconds = 0));
    setMinute((minutes) => minutes + 1);
  } else if (minute === 60) {
    setMinute((minute = 0));
    setHours((hours) => hours + 1);
  } else if (hours === 24) {
    setHours((hours = 0));
    clearInterval();
  }

  return (
    <div className="container">
      <div id="icon">
        <FaClock />
      </div>
      <div className="hours">{hours}: </div>
      <div className="minute">{minute}: </div>
      <div className="seconds">{seconds}.</div>
    </div>
  );
};

export default Count;
