import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

export default function FetchUserIssue() {
  const [userId, setUser] = useState(null);
  const [count, setCount] = useState(null);

  const filters = { includePosts: true, includeComments: false };

  const fetchUser = () => {
    console.log('Fetchuser called');
  };

  useEffect(() => {
    fetchUser(userId, filters);
  }, [userId, filters]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        {count} count
      </button>
    </div>
  );
}