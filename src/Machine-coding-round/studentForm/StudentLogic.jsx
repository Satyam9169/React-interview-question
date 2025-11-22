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
  const [error, setError] = useState({});

  const validation = useCallback(() => {
    const newError = {};
    if (!form.first_name.trim()) newError.first_name = "First name is required";
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
      console.log("FORM ADDING SUBMIT", form);
      if (!validation()) return;
      //Adding to the student
      //setStudent(pre=> ([...pre, {...form, id:Date.now()}])); //this is shortcut
      setStudent((preStudent) => {
        const nextStudent = { ...form, id: Date.now() };
        const newStudent = [...preStudent, nextStudent];
        console.log("STUDENT ARRAY AFTER PUSH", newStudent);
        return newStudent;
      });

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

  return (
    <>
      <StudentForm
        form={form}
        error={error}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <StudentTable student={student} />
    </>
  );
};

export default StudentLogic;
