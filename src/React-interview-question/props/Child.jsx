import React from "react";

const Child = ({ id, name, age, salary, cityName, viewSalary }) => {
  const handleSalary = () => {
    viewSalary(salary);
  };

  return (
    <>
      <div>
        <p>Id: {id}</p>
        <p>Name : {name}</p>
        <p>Age: {age}</p>
        <p>CityName : {cityName}</p>
        <button onClick={handleSalary}>view salary</button>
      </div>
    </>
  );
};

export default Child;
