import React, { useState, useEffect, useCallback, useMemo } from "react";

const Student = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    mobile_no: "",
    gender: "",
    address: "",
    location: "",
  });

  const [student, setStudent] = useState([]);
  const [error, setError] = useState({});

  const validation = useCallback(() => {
    let newError = {};
    if (!form.first_name.trim()) newError.first_name = "first name is required";
    if (!form.last_name.trim()) newError.last_name = "last name is required";
    if (!form.mobile_no.trim()) newError.mobile_no = "mobile no is required";
    else if (!/^[0-9]+$/.test(form.mobile_no))
      newError.mobile_no = "mobile no must contain digit only";
    else if (form.mobile_no.length !== 10)
      newError.mobile_no = "Mobile is must be 10 digit";
    if (!form.gender) newError.gender = "gender is required";
    if (!form.address.trim()) newError.address = "address is required";
    if (!form.location.trim()) newError.location = "location is required";
    setError(newError);
    return Object.keys(newError).length === 0;
  }, [form]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!validation()) return;
      // Add to the student
      setStudent((pre) => [...pre, { ...form, id: Date.now() }]);
      // setStudent((preStudent) => {
      //   const nextStudent = { form, id: Date.now() };
      //   const next = [...preStudent, nextStudent];
      //   return next;
      // });
      // reset the form
      setForm({
        first_name: "",
        last_name: "",
        mobile_no: "",
        gender: "",
        address: "",
        location: "",
      });
      setError({});
    },
    [form, validation]
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    // setForm((pre) => ({ ...pre, [name]: value }));
    setForm((pre) => {
      const next = { ...pre };
      next[name] = value;
      return next;
    });
  }, []);

  //for heavy calculation in future like searching and sorting
  const studentMemo = useMemo(() => student, [student]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="enter your first name"
          onChange={handleChange}
          value={form.first_name}
        />
        <span style={{ color: "red" }}>{error.first_name}</span>
        <br />
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="enter your last name"
          onChange={handleChange}
          value={form.last_name}
        />
        <span style={{ color: "red" }}>{error.last_name}</span>
        <br />
        <label htmlFor="first_name">Mobile No:</label>
        <input
          type="text"
          id="mobile_no"
          name="mobile_no"
          placeholder="enter your mobile no"
          onChange={handleChange}
          value={form.mobile_no}
        />
        <span style={{ color: "red" }}>{error.mobile_no}</span>
        <br />
        <label htmlFor="gender">Gender: </label>
        <select
          id="gender"
          name="gender"
          value={form.gender}
          onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <span style={{ color: "red" }}>{error.gender}</span>
        <br />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="enter your address"
          onChange={handleChange}
          value={form.address}
        />
        <span style={{ color: "red" }}>{error.address}</span>
        <br />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="enter your location"
          onChange={handleChange}
          value={form.location}
        />
        <span style={{ color: "red" }}>{error.location}</span>
        <br />
        <button type="submit">submit</button>
      </form>
      {
        <table border="1">
          <thead>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Mobile No</th>
              <th>Address</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {student.map((stu, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{stu.first_name}</td>
                <td>{stu.last_name}</td>
                <td>{stu.gender}</td>
                <td>{stu.mobile_no}</td>
                <td>{stu.address}</td>
                <td>{stu.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
};

export default Student;
