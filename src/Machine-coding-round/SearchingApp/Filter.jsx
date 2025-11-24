import React, { useState, useEffect, useMemo } from "react";
import studentsData from "./db.json";

const Filter = () => {
  const [filter, setFilter] = useState("");

  // using performance optimization

  // This is beginners  way to write the program
  const filteredUser = studentsData.students.filter(
    (user) =>
      user.firstName.toLowerCase().includes(filter.toLowerCase()) ||
      user.lastName.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase()) ||
      user.phone.toLowerCase().includes(filter.toLowerCase()) ||
      user.gender.toLowerCase().includes(filter.toLowerCase()) ||
      user.department.toLowerCase().includes(filter.toLowerCase()) ||
      user.city.toLowerCase().includes(filter.toLowerCase())
  );

  const handleChange = (e) => setFilter(e.target.value);

  return (
    <div>
      <h1>Search the Student List</h1>
      {/* <ol>
        <h4>Some point to be remember: </h4>
        <li>
          If your JavaScript takes more than ~16ms to execute, it risks dropping
          frames and causing lag. If it's 50ms–1000ms, use Web Workers.
        </li>
        <li>
          UI needs 60 FPS → one frame = 16.6ms If your function blocks longer,
          UI lags.
        </li>
      </ol> */}
      {/* <table border="1">
        <thead>
          <tr>
            <th>Data Size</th>
            <th>Ideal Approach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>0–10k</th>
            <th>Normal .filter()</th>
          </tr>
          <tr>
            <th>10k–50k</th>
            <th>Optimized .filter() or debounce</th>
          </tr>
          <tr>
            <th>50k–500k</th>
            <th>Indexing, memo, caching</th>
          </tr>
          <tr>
            <th>500k–2M</th>
            <th>Web Worker + indexing</th>
          </tr>
          <tr>
            <th>10M+</th>
            <th>Backend search engine (Elastic, Meilisearch, Postgres FTS)</th>
          </tr>
        </tbody>
      </table> */}
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={handleChange}
        placeholder="Type your text"
      />
      {filteredUser.map((u, idx) => (
        <ul key={u.id}>
          <li>{idx + 1}</li>
          <li>{u.firstName}</li>
          <li>{u.lastName}</li>
          <li>{u.email}</li>
          <li>{u.phone}</li>
          <li>{u.gender}</li>
          <li>{u.department}</li>
          <li>{u.city}</li>
        </ul>
      ))}
    </div>
  );
};

export default Filter;
