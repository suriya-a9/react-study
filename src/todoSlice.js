// features/todo/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    editIndex: null,
    editText: "",
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            if (action.payload.trim()) {
                state.tasks.push(action.payload);
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((_, i) => i !== action.payload);
        },
        startEdit: (state, action) => {
            state.editIndex = action.payload;
            state.editText = state.tasks[action.payload];
        },
        updateEditText: (state, action) => {
            state.editText = action.payload;
        },
        saveEdit: (state) => {
            if (state.editIndex !== null) {
                state.tasks[state.editIndex] = state.editText;
                state.editIndex = null;
                state.editText = "";
            }
        },
    },
});

export const {
    addTask,
    deleteTask,
    startEdit,
    updateEditText,
    saveEdit,
} = todoSlice.actions;

export default todoSlice.reducer;