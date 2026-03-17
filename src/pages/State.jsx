// State Counter [Highlight]

// import { useState } from "react";

// export default function State() {
//     const [counter, setCounter] = useState(0);
//     const increment = () => {
//         setCounter(counter + 1);
//     }
//     const decrement = () => {
//         setCounter(counter - 1);
//     }
//     const reset = () => {
//         setCounter(0);
//     }
//     return (
//         <div>
//             <span>Count: {counter}</span>
//             <button onClick={increment}>Increase</button>
//             <button onClick={decrement}>Decrease</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }

// Form State - [Highlight]

// import { useState } from 'react';

// const State = () => {
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         password: ''
//     })

//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Form Data: ${JSON.stringify(form, null, 2)}`);
//         console.log(form);
//     }

//     return (
//         <>
//             <span>Form</span>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name: </label>
//                     <input
//                         type='text'
//                         name='name'
//                         value={form.name}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Email: </label>
//                     <input
//                         type='text'
//                         name='email'
//                         value={form.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Password: </label>
//                     <input
//                         type='text'
//                         name='password'
//                         value={form.password}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button type='submit'>Submit</button>
//             </form>
//         </>
//     )
// }

// export default State;

// Form State List - [Highlight]

// import { useState } from "react";

// const State = () => {
//     const [list, setList] = useState([]);
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         password: ''
//     })
//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setList([...list, form]);
//         setForm({
//             name: '',
//             email: '',
//             password: ''
//         })
//         console.log(form);
//     }
//     return (
//         <>
//             <span>Form</span>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name: </label>
//                     <input
//                         type='text'
//                         name='name'
//                         value={form.name}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Email: </label>
//                     <input
//                         type='text'
//                         name='email'
//                         value={form.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Password: </label>
//                     <input
//                         type='text'
//                         name='password'
//                         value={form.password}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button type='submit'>Submit</button>
//             </form>
//             {list.map((item, index) => (
//                 <div key={index}>
//                     <p>{item.name}</p>
//                     <p>{item.email}</p>
//                     <p>{item.password}</p>
//                 </div>
//             ))}
//         </>
//     )
// }

// export default State;

// State Listing with Edit and Delete - [Highlight]

// import { useState } from "react";

// const State = () => {
//     const [list, setList] = useState([]);
//     const [editIndex, setEditIndex] = useState(null);

//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (editIndex !== null) {
//             const updatedList = list.map((item, index) =>
//                 index === editIndex ? { ...item, ...form } : item
//             );

//             setList(updatedList);
//             setEditIndex(null);
//         } else {
//             setList([...list, form]);
//         }

//         setForm({
//             name: "",
//             email: "",
//             password: ""
//         });
//     };

//     const handleDelete = (indexToDelete) => {
//         const filtered = list.filter((_, index) => index !== indexToDelete);
//         setList(filtered);
//     };

//     const handleEdit = (item, index) => {
//         setForm({
//             name: item.name,
//             email: item.email,
//             password: item.password
//         });

//         setEditIndex(index);
//     };

//     return (
//         <>
//             <span>Form</span>

//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name: </label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div>
//                     <label>Email: </label>
//                     <input
//                         type="text"
//                         name="email"
//                         value={form.email}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div>
//                     <label>Password: </label>
//                     <input
//                         type="text"
//                         name="password"
//                         value={form.password}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <button type="submit">
//                     {editIndex !== null ? "Update" : "Submit"}
//                 </button>
//             </form>

//             <hr />

//             {list.map((item, index) => (
//                 <div key={index}>
//                     <p>{item.name}</p>
//                     <p>{item.email}</p>
//                     <p>{item.password}</p>

//                     <button onClick={() => handleEdit(item, index)}>Edit</button>
//                     <button onClick={() => handleDelete(index)}>Delete</button>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default State;

// State Listing with Edit and Delete with Unique Id instead of Index - [Highlight]

// import { useState } from "react";

// const State = () => {
//     const [list, setList] = useState([]);
//     const [editId, setEditId] = useState(null);

//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (editId) {
//             const updatedList = list.map((item) =>
//                 item.id === editId ? { ...item, ...form } : item
//             );

//             setList(updatedList);
//             setEditId(null);
//         } else {
//             const newItem = {
//                 id: Date.now(),
//                 ...form
//             };

//             setList([...list, newItem]);
//         }

//         setForm({
//             name: "",
//             email: "",
//             password: ""
//         });
//     };

//     const handleDelete = (id) => {
//         const filtered = list.filter((item) => item.id !== id);
//         setList(filtered);
//     };

//     const handleEdit = (item) => {
//         setForm({
//             name: item.name,
//             email: item.email,
//             password: item.password
//         });

//         setEditId(item.id);
//     };

//     return (
//         <>
//             <span>Form</span>

//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name: </label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div>
//                     <label>Email: </label>
//                     <input
//                         type="text"
//                         name="email"
//                         value={form.email}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div>
//                     <label>Password: </label>
//                     <input
//                         type="text"
//                         name="password"
//                         value={form.password}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <button type="submit">
//                     {editId ? "Update" : "Submit"}
//                 </button>
//             </form>

//             <hr />

//             {list.map((item) => (
//                 <div key={item.id}>
//                     <p>{item.name}</p>
//                     <p>{item.email}</p>
//                     <p>{item.password}</p>

//                     <button onClick={() => handleEdit(item)}>Edit</button>
//                     <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default State;

// State in conditional rendering - [Highlight]

// import { useState } from "react";

// const State = () => {
//     const [theme, setTheme] = useState('light');

//     const themeChange = () => {
//         setTheme(theme === 'light' ? 'dark' : 'light');
//     }

//     const styles = {
//         backgroundColor: theme === 'light' ? 'white' : 'black',
//         color: theme === 'light' ? 'black' : 'white',
//         height: '100vh',
//         textAlign: 'center',
//         padding: '20px',
//         display: 'flex',
//         justifyContent: 'start',
//         alignItems: 'center',
//         flexDirection: 'column'
//     }

//     return (
//         <div style={styles}>
//             <h2>Current Theme: {theme === 'light' ? 'Light' : 'Dark'} theme</h2>
//             <button onClick={themeChange}>Switch to {theme === 'light' ? 'Dark' : 'Light'} mode</button>
//         </div>
//     )
// }

// export default State;

// State in Todo Listing - [Highlight]

// import { useState } from "react";

// export default function Todo() {
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState('');
//     const [editIndex, setEditIndex] = useState(null);
//     const [editText, setEditText] = useState('');

//     const addTask = () => {
//         if (newTask) {
//             setTasks([...tasks, newTask]);
//             setNewTask('');
//         }
//     }

//     const handleEdit = (index) => {
//         setEditIndex(index);
//         setEditText(tasks[index])
//     }

//     const handleUpdate = () => {
//         const updatedTask = [...tasks]
//         updatedTask[editIndex] = editText
//         setTasks(updatedTask);
//         setEditIndex(null)
//         setEditText('')
//     }

//     const handleDelete = (index) => {
//         const updatedTask = tasks.filter((_, i) => i !== index)
//         setTasks(updatedTask);
//     }

//     return (
//         <div>
//             <h1>Todo List</h1>
//             <div>
//                 <lable>Add Task: </lable>
//                 <input
//                     type="text"
//                     value={newTask}
//                     placeholder="Add new task"
//                     onChange={(e) => setNewTask(e.target.value)}
//                 />
//                 <button onClick={addTask}>Submit</button>
//             </div>
//             <ul>
//                 {tasks.map((task, index) => (
//                     <li key={index} className="task-item">
//                         {editIndex === index ? (
//                             <span>
//                                 <input
//                                     type="text"
//                                     value={editText}
//                                     onChange={(e) => setEditText(e.target.value)}
//                                 />
//                                 <button onClick={handleUpdate}>Save</button>
//                             </span>
//                         ) : (
//                             <span>
//                                 <span>{task}</span>
//                                 <div className="buttons">
//                                     <button className="btn-edit" onClick={() => handleEdit(index)}>Edit</button>
//                                     <button className="btn-delete" onClick={() => handleDelete(index)}>Delete</button>
//                                 </div>
//                             </span>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// State in Derived State & Computations - [Highlight]

// import { useState } from "react";

// const Cart = () => {
//     const [cart, setCart] = useState([
//         { id: 1, name: "Apple", price: 10, quantity: 1 },
//         { id: 2, name: "Banana", price: 5, quantity: 2 }
//     ]);

//     const increaseQty = (id) => {
//         setCart(
//             cart.map((item) =>
//                 item.id === id
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item
//             )
//         );
//     };

//     const decreaseQty = (id) => {
//         setCart(
//             cart.map((item) =>
//                 item.id === id && item.quantity > 1
//                     ? { ...item, quantity: item.quantity - 1 }
//                     : item
//             )
//         );
//     };

//     // Derived state
//     const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

//     const totalPrice = cart.reduce(
//         (sum, item) => sum + item.price * item.quantity,
//         0
//     );

//     return (
//         <div>
//             <h2>Shopping Cart</h2>

//             {cart.map((item) => (
//                 <div key={item.id}>
//                     <span>{item.name}</span> - ₹{item.price}
//                     <button onClick={() => decreaseQty(item.id)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => increaseQty(item.id)}>+</button>
//                 </div>
//             ))}

//             <hr />

//             <h3>Total Items: {totalItems}</h3>
//             <h3>Total Price: ₹{totalPrice}</h3>
//         </div>
//     );
// };

// export default Cart;

// State with State Lifting & Prop Drilling 

import { useState } from "react";

const Cart = () => {
    const [cart, setCart] = useState([
        { id: 1, name: "Apple", price: 10, quantity: 1 },
        { id: 2, name: "Banana", price: 5, quantity: 2 }
    ]);

    const increaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // Derived state
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h2>Shopping Cart</h2>

            {cart.map((item) => (
                <div key={item.id}>
                    <span>{item.name}</span> - ₹{item.price}
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
            ))}

            <hr />

            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: ₹{totalPrice}</h3>
        </div>
    );
};

export default Cart;