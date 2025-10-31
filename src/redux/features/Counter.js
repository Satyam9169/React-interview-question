import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <div>counter : {count}</div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </>
    )
}

export default counter