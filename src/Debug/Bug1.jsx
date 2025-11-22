import React, { useEffect, useState } from "react";

const Bug1 = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Fetching users for page:", page);

    fetch(`https://dummyjson.com/users?limit=3&skip=${page * 3}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers((pre) => [...pre, ...data.users]); // BUG: stale + infinite re-renders
      });
  }, [page]); // ❌ missing dependency array causes infinite fetch

  return (
    <>
      <h2>Page: {page}</h2>

      <button onClick={() => setPage(page + 1)}>Next Page</button>

      {users.map((u) => (
        <p key={u.id}>{u.firstName}</p>
      ))}
    </>
  );
};

export default Bug1;
