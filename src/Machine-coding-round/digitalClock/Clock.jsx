import React, { useState, useEffect } from "react";

const Clock = () => {
  const [rightTime, setRightTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setRightTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = rightTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hours12: true,
  });

  const date = rightTime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const day = rightTime.toLocaleDateString([], { weekday: "long" });

  return (
    <>
      <section>
        <div>
          <h1>Digital Clock</h1>
        </div>
        <p>Time: {time}</p>
        <p>Date: {date}</p>
        <p>Day: {day}</p>
      </section>
    </>
  );
};

export default Clock;
