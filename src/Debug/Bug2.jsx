// 🐞 BUG #2 — Missing useEffect Dependency
import React, { useEffect, useState } from "react";

export default function Bug2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect executed", count);
  }); // ❌ No dependency → runs every render

  return (
    <button onClick={() => setCount(count + 1)}>
      Increase {count}
    </button>
  );
}
