import React, { useState, useEffect } from 'react';
import './style.css';

export default function AddItems() {
  const [items, setItems] = useState(['Apple', 'Banana']);

  const AddItem = () => {
    items.push('orange')
    setItems(items);
  };

  return (
    <div>
      {items.map((el) => (
        <li key={el}>{el}</li>
      ))}

      <button onClick={AddItem}>Add</button>
    </div>
  );
}
