import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, restCounter } from '../Services/Actions/CountrtAction';

const Counter = () => {
    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();
    const handaleIncrement =()=>{
        dispatch(incrementCounter());
    }
    const handaledecrement =()=>{
        dispatch(decrementCounter());
    }
    const handalereset =()=>{
        dispatch(restCounter());
    }
    return (
        <div className='text-center'>
            <h1>Counter</h1>
            <h2>Count : {count}</h2>
            <button style={{background: "beige",
    padding: "16px",
    margin: "10px"}}  onClick={handaleIncrement}>Increment</button>
            <button style={{background: "beige",
    padding: "16px",
    margin: "10px"}} onClick={handaledecrement}>Decrement</button>
            <button style={{background: "beige",
    padding: "16px",
    margin: "10px"}} onClick={handalereset}>Reset</button>
        </div>
    );
};

export default Counter;