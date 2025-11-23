// 🐞 BUG #3 — Infinite API Call (Object Dependency)
import React, { useState, useEffect } from "react";

export default function Bug3() {
  const [filters] = useState({ limit: 5 });

  useEffect(() => {
    console.log("Fetching API");

    fetch(`https://dummyjson.com/products?limit=${filters.limit}`)
      .then(res => res.json())
      .then(data => console.log(data));

  }, [filters]); // ❌ filters object creates new reference always

  return <h1>Products</h1>;
}