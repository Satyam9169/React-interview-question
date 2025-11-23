// 🐞 BUG #5 — setTimeout Stale State
import React, { useState } from "react";

export default function Bug5() {
  const [count, setCount] = useState(0);

  const delayedIncrease = () => {
    setTimeout(() => {
      setCount(count + 1); // ❌ stale closure
    }, 3000);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={delayedIncrease}>Increase After 3s</button>
    </>
  );
}
