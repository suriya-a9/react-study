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

// State Listing with Edit and Delete with Unique Id instead of Index

import { useState } from "react";

const State = () => {
    const [list, setList] = useState([]);
    const [editId, setEditId] = useState(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId) {
            const updatedList = list.map((item) =>
                item.id === editId ? { ...item, ...form } : item
            );

            setList(updatedList);
            setEditId(null);
        } else {
            const newItem = {
                id: Date.now(),
                ...form
            };

            setList([...list, newItem]);
        }

        setForm({
            name: "",
            email: "",
            password: ""
        });
    };

    const handleDelete = (id) => {
        const filtered = list.filter((item) => item.id !== id);
        setList(filtered);
    };

    const handleEdit = (item) => {
        setForm({
            name: item.name,
            email: item.email,
            password: item.password
        });

        setEditId(item.id);
    };

    return (
        <>
            <span>Form</span>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Password: </label>
                    <input
                        type="text"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">
                    {editId ? "Update" : "Submit"}
                </button>
            </form>

            <hr />

            {list.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.password}</p>

                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </>
    );
};

export default State;