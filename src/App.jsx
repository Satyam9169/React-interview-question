import React from "react";
// import Main from "./React-interview-question/props/Main";
import "./App.css";
import Student from "./Machine-coding-round/studentForm/Student";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./redux/features/counterSlice";
// import CarouselItem from "./Machine-coding-round/Carousel/CarouselItem";
// import Clock from "./Machine-coding-round/digitalClock/Clock";
// import TimerApp from "./Machine-coding-round/TimerApp/TimerApp";

const App = () => {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Hello React !!! React Interview Quesiton</h2> 
        {/* <Main /> */}
         {/* <CarouselItem /> */}
         {/* <Clock /> */}
         {/* <TimerApp /> */}
        <Student />
        {/* <div>counter : {count}</div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button> */}
      </div>
    </>
  );
};

export default App;
