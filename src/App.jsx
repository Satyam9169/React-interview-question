import React from "react";
// import Main from "./React-interview-question/props/Main";
import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./redux/features/counterSlice";
import CarouselItem from "./Machine-coding-round/Carousel/CarouselItem";

const App = () => {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Hello React !!! React Interview Quesiton</h2> 
        {/* <Main /> */}
         <CarouselItem />

        {/* <div>counter : {count}</div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button> */}
      </div>
    </>
  );
};

export default App;
