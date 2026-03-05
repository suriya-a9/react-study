import { useState, useEffect } from "react";

export default function TodoLocalStorage() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    // Load tasks from localStorage on mount
    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditText(tasks[index]);
    };

    const handleUpdate = () => {
        const updatedTask = [...tasks];
        updatedTask[editIndex] = editText;
        setTasks(updatedTask);
        setEditIndex(null);
        setEditText('');
    };

    const handleDelete = (index) => {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    };

    const hanldeClear = () =>{
        localStorage.removeItem("tasks");
        setTasks([]);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={hanldeClear}>Clear</button>
            <div>
                <label>Add Task: </label>
                <input
                    type="text"
                    value={newTask}
                    placeholder="Add new task"
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTask}>Submit</button>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        {editIndex === index ? (
                            <span>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={handleUpdate}>Save</button>
                            </span>
                        ) : (
                            <span>
                                <span>{task}</span>
                                <div className="buttons">
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </div>
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}