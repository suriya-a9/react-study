import { useState } from "react";

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const addTask = () => {
        if (newTask) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    }

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditText(tasks[index])
    }

    const handleUpdate = () => {
        const updatedTask = [...tasks]
        updatedTask[editIndex] = editText
        setTasks(updatedTask);
        setEditIndex(null)
        setEditText('')
    }

    const handleDelete = (index) => {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <lable>Add Task: </lable>
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
                                    <button className="btn-edit" onClick={() => handleEdit(index)}>Edit</button>
                                    <button className="btn-delete" onClick={() => handleDelete(index)}>Delete</button>
                                </div>
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}