import React, { useState, useEffect } from "react";

const TimerApp = () => {
  const [second, setSecond] = useState(0);
  const [Active, setActive] = useState(false);

  useEffect(() => {
    let timer;
    if (Active) {
      timer = setInterval(() => {
        setSecond((pre) => pre + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [Active]);

  const start = () => setActive(true);
  const stop = () => setActive(false);
  const reset = () => {
    setActive(false);
    setSecond(0);
  };

  // Convert seconds into hh:mm:ss format
  const formatTime = (totalSecond) => {
    const hrs = Math.floor(totalSecond / 3600);
    const min = Math.floor((totalSecond % 3600) / 60);
    const sec = totalSecond % 60;

    const formattedhrs = String(hrs).padStart(2, "0");
    const formattedmin = String(min).padStart(2, "0");
    const formattedsec = String(sec).padStart(2, "0");

    return `${formattedhrs} : ${formattedmin} : ${formattedsec}`;
  };

  return (
    <>
      <div
        style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
        <div>TimerApp : {formatTime(second)}</div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default TimerApp;
