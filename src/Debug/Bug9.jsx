import React, { useState, useEffect } from 'react';

export default function CounterBug() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let ct = 0;
    for (var i = 0; i < 5; i++) {
       ct = count + 1;
      setCount(ct);
    }
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}