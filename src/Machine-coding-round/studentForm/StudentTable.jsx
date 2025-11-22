import React from "react";

const StudentTable = React.memo(({ student }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile NO</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {student.map((stu, index) => (
          <tr key={index}>
            <td>{stu.id}</td>
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
  );
});

export default StudentTable;
