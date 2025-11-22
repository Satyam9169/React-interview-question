import React from "react";

const StudentForm = ({ form, error, handleChange, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name :</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}>{error.first_name}</span>
        <br />
        <label htmlFor="last_name">Last Name :</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}>{error.last_name}</span>
        <br />
        <label htmlFor="mobile_no">mobile Number :</label>
        <input
          type="text"
          id="mobile_no"
          name="mobile_no"
          value={form.mobile_no}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}>{error.mobile_no}</span>
        <br />
        <label htmlFor="gender">Gender :</label>
        <select
          id="gender"
          name="gender"
          value={form.gender}
          onChange={handleChange}>
          <option value="">-- select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <span style={{ color: "red" }}>{error.gender}</span>
        <br />
        <label htmlFor="address">Address :</label>
        <input
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}>{error.address}</span>
        <br />
        <label htmlFor="Location">Location :</label>
        <input
          type="text"
          id="location"
          name="location"
          value={form.location}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}>{error.location}</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default StudentForm;
