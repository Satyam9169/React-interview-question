// 🐞 BUG #1 — Stale State + Wrong Data Structure
import React, { useState, useCallback } from "react";

export default function Bug1() {
  const [student, setStudent] = useState([]);
  const [form, setForm] = useState({ name: "" });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setStudent((prev) => {
      const next = { form, id: Date.now() }; // BUG: Nested object
      return [...prev, next];
    });
  }, [form]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ name: e.target.value })}
        />
      </form>

      {student.map((s) => (
        <p key={s.id}>{s.name}</p> {/* BUG: wrong property */}
      ))}
    </>
  );
}

//correct code below

import React, { useState } from "react";

export default function Bug1() {
  const [student, setStudent] = useState([]);
  const [form, setForm] = useState({ name: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) return;

    setStudent((prev) => [
      ...prev,
      {
        ...form,
        id: Date.now(),
      },
    ]);

    setForm({ name: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ name: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>

      {student.map((s) => (
        <p key={s.id}>{s.name}</p>
      ))}
    </>
  );
}
