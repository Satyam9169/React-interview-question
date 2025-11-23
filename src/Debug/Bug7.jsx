// 🐞 BUG #7 — Race Condition (Out of Order Responses)
import React, { useState, useEffect } from "react";

export default function Bug7() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!query) return;

    fetch(`https://dummyjson.com/users/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        console.log("Response:", query);
        setUsers(data.users); // ❌ old request may override new
      });

  }, [query]);

  return (
    <>
      <input onChange={(e) => setQuery(e.target.value)} />
      {users.map(u => <p key={u.id}>{u.firstName}</p>)}
    </>
  );
}
