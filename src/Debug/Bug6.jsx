// 🐞 BUG #6 — Memory Leak (No Cleanup on Unmount)
import React, { useState, useEffect } from "react";

export default function Bug6() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users?delay=5000")
      .then(response => response.json())
      .then(result => setData(result)); // ❌ runs even after unmount
  }, []);

  return <h2>Loading...</h2>;
}
