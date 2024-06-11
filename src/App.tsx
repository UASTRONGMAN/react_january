import React from 'react';
import {counterSlice, useAppDispatch, useAppSelector} from "./redux/store";

const App = () => {

    const {value} = useAppSelector(state => state.slice1);
    
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => {
                dispatch(increment())
            }}>increment</button>
            <button onClick={() => {
                dispatch(decrement())
            }}>decrement</button>
            <button onClick={() => {
                dispatch(plus10())
            }}>Plus 10 to value</button>
            <button onClick={() => {
                dispatch(minus10())
            }}>Minus 10 to value</button>
        </div>
    );
};

export const {increment, decrement, plus10, minus10} = counterSlice.actions;

export default App;