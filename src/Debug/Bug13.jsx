// create a custom hooks and solve it now to call the API
import React, { useState, useEffect } from 'react';
import './style.css';
import { useFetch } from './useFetch';

// https://jsonplaceholder.typicode.com/users

export default function UsersList() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await res.json();
      setUser(result);
      console.log(result);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user?.map((item) => (
        <li>{item.name}</li>
        // <useFetch />
      ))}
    </div>
  );
}

