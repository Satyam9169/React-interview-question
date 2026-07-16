import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

// below correct code
import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

export default function FetchUserIssue() {
  const [userId, setUser] = useState(null);
  const [count, setCount] = useState(null);

  const filters = useMemo(() => ({ includePosts: true, includeComments: false }), []);

  const fetchUser = () => {
    console.log('Fetchuser called');
  };

  useEffect(() => {
    fetchUser(userId, filters);
  }, [userId, filters, fetchUser]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        {count} count
      </button>
      <button onClick={() => setUser((prev) => prev + 1)}>
        Change User
      </button>
    </div>
  );
}