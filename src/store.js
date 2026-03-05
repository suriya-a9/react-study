import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterReducer";
import todoReducer from "./todoSlice";

const store = configureStore({
    reducer:{
        counter: countReducer,
        todo: todoReducer
    }
})

export default store;