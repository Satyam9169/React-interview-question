import React, { useCallback, useState } from "react";
import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";

const StudentLogic = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    mobile_no: "",
    gender: "",
    address: "",
    location: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    // setForm(pre=> ({...pre, [name]: value})) // this is shortcut
    setForm((pre) => {
      const next = { ...pre };
      next[name] = value;
      return next;
    });
  }, []);

  const [student, setStudent] = useState([]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!validation()) return;
      //Adding to the student
      //setStudent(pre=> ([...pre, {...form, id:Date.now()}])); //this is shortcut
      setStudent((preStudent) => {
        const nextStudent = { ...form, id: Date.now() };
        const newStudent = [...preStudent, nextStudent];
        return newStudent;
      });
    },
    [form]
  );

  const [error, setError] = useState({});

  const validation = useCallback(() => {
    const newError = {};
    if (!form.first_name.trim()) newError.first_name = "First name is required";
    if (!form.last_name.trim()) newError.last_name = "last name is required";
    if (!form.mobile_no.trim()) newError.mobile_no = "mobile no is required";
    else if (!/^[0-9]+$/.test(form.mobile_no))
      newError.mobile_no = "mobile no contain digit only";
    else if (form.mobile_no.length !== 10)
      newError.mobile_no = "mobile no must be 10 digit";
    setError(newError);
  }, [form, error]);

  return (
    <>
      <StudentForm
        form={form}
        error={error}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <StudentTable />
    </>
  );
};

export default StudentLogic;
