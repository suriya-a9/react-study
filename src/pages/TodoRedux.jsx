import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addTask,
    deleteTask,
    startEdit,
    updateEditText,
    saveEdit,
} from "../todoSlice";

export default function TodoRedux() {
    const [newTask, setNewTask] = useState("");

    const { tasks, editIndex, editText } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addTask(newTask));
        setNewTask("");
    };

    return (
        <div>
            <h1>Todo List</h1>

            <div>
                <label>Add Task: </label>
                <input
                    type="text"
                    value={newTask}
                    placeholder="Add new task"
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={handleAdd}>Submit</button>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) =>
                                        dispatch(updateEditText(e.target.value))
                                    }
                                />
                                <button onClick={() => dispatch(saveEdit())}>
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <span>{task}</span>
                                <button onClick={() => dispatch(startEdit(index))}>
                                    Edit
                                </button>
                                <button onClick={() => dispatch(deleteTask(index))}>
                                    Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}