import {configureStore, createSlice} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type CounterType = {
    value: number;
}

const initialState:CounterType = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        plus10: (state) => {
            state.value += 10;
        },
        minus10: (state) => {
            state.value -= 10;
        }
    }
});



export const store = configureStore({
    reducer:{
        slice1: counterSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<RootDispatch>();