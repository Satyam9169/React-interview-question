import React, { useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const Intervalref = useRef(null);

  const start = () => {
    if (Intervalref.current !== null) return;

    Intervalref.current = setInterval(() => {
      setTime((pre) => pre + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(Intervalref.current);
    Intervalref.current = null;
  };

  const reset = () => {
    clearInterval(Intervalref.current);
    Intervalref.current = null;
    setTime(0);
  };

  return (
    <>
      <h4>Timer : {time}</h4>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Timer;
