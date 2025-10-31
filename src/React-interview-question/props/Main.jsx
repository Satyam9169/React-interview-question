import React from "react";
import Child from "./Child";
import Card from "./Card";
import "./Main.css";

const Main = () => {
  const obj = [
    { id: 1, name: "shivam", age: 28, salary: "₹30000", cityName: "Varansi" },
    {
      id: 2,
      name: "shubham",
      age: 29,
      salary: "₹35000",
      cityName: "Sultanpur",
    },
    { id: 3, name: "sunil", age: 30, salary: "₹40000", cityName: "Varansi" },
    { id: 4, name: "navneet", age: 31, salary: "₹45000", cityName: "Noida" },
  ];

  const viewSalary = (salary) => {
    alert("Your monthly salary is : " + salary);
  };

  return (
    <>
      <div className="main-container">
        <h4> Employee Details : </h4>
        {/* <Child 
          id="1" name="shivam" age="25" salary="29000" cityName="Noida" 
        /> */}
        <div className="Main">
          {obj.map((ele) => (
            <div className="card">
              <Child
                id={ele.id}
                name={ele.name}
                age={ele.age}
                salary={ele.salary}
                cityName={ele.cityName}
                viewSalary={viewSalary}
              />
            </div>
          ))}
        </div>

        {/* Here we are trying to communicate with children props */}
        <Card>
          <h1>Hi, This is children props heading</h1>
          <p>
            <li>
              props.children = special prop that lets a component wrap arbitrary
              content.
            </li>
            <li>We use it for reusable, composable UI structures. Best in</li>
            <li>
              scenarios like cards, layouts, wrappers, modals, sidebars,
              dashboards.
            </li>
          </p>
        </Card>
      </div>
    </>
  );
};

export default Main;
