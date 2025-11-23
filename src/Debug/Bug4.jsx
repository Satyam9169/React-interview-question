// 🐞 BUG #4 — React.memo Preventing UI Update
import React, { useState, memo } from "react";

const Child = memo(({ user }) => {
  console.log("Child rendered");
  return <h3>{user.name}</h3>;
});

export default function Bug4() {
  const [user, setUser] = useState({ name: "Aman" });

  const updateName = () => {
    setUser({ name: "Aman" }); // ❌ New object but same value → confusion
  };

  return (
    <>
      <button onClick={updateName}>Update</button>
      <Child user={user} />
    </>
  );
}
