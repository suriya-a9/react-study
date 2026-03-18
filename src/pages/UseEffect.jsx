// UseEffect to runs an effect only on mount using an empty dependency array []

// import { useEffect } from "react";

// const Mount = () => {
//     useEffect(() => {
//         console.log("Component mounted")
//     }, []);
//     return (
//         <>
//             <h1>Check console</h1>
//         </>
//     )
// }

// export default Mount;

// UseEffect to effect runs every time count changes

// import { useState, useEffect } from "react";

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     }

//     useEffect(() => {
//         console.log(`Count updated: ${count}`);
//     }, [count]);

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={increment}>Increase</button>
//         </div>
//     )
// }

// export default Counter;

// UseEffect to update the browser tab title with the count value.

// import { useState, useEffect } from "react";

// const Counter = () =>{
//     const [count, setCount] = useState(0);
//     const increment = () =>{
//         setCount(count+1);
//     }
//     useEffect(()=>{
//         document.title = `${count}`
//     },[count]);
//     return(
//         <div>
//             <p>{count}</p>
//             <button onClick={increment}>+</button>
//         </div>
//     )
// }

// export default Counter;

// UseEffect to fetch data from an api and list them below

// import { useState, useEffect } from "react";
// import axios from "axios";

// const UserList = () => {
//     const [list, setList] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const userListData = async () => {
//             const res = await axios.get("http://localhost:8081/api/admin/user")
//             setList(res.data.data);
//             setLoading(false);
//         }
//         userListData();
//     }, []);
//     return (
//         <div>
//             <h2>User List</h2>
//             {loading ? <div>Loading...</div>
//                 :
//                 <table cellPadding="10" cellSpacing="5">
//                     <thead>
//                         <tr>
//                             <th>S/no</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Mobile</th>
//                             <th>Gender</th>
//                             <th>Country</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {list.length === 0 ? (
//                             <tr>
//                                 <td colSpan={6}>No data</td>
//                             </tr>
//                         ) : (
//                             list.map((lists, index) => (
//                                 <tr key={lists._id}>
//                                     <td>{index + 1}</td>
//                                     <td>{lists.name}</td>
//                                     <td>{lists.email}</td>
//                                     <td>{lists.mobileNumber}</td>
//                                     <td>{lists.gender}</td>
//                                     <td>{lists.country}</td>
//                                 </tr>
//                             ))
//                         )}
//                     </tbody>
//                 </table>
//             }
//         </div>
//     )
// }

// export default UserList

// UseEffect to Start counting seconds when component mounts and Stop timer when component unmounts

// import { useState, useEffect } from "react";

// const Timer = () => {
//     const [seconds, setSeconds] = useState(0);
//     const [running, setRunning] = useState(false);

//     useEffect(() => {
//         let interval;

//         if (running) {
//             interval = setInterval(() => {
//                 setSeconds(prev => prev + 1)
//             }, 1000);
//         }

//         return () => {
//             clearInterval(interval);
//         }
//     }, [running]);

//     const start = () => {
//         setRunning(true);
//     }

//     const stop = () => {
//         setRunning(false);
//     }

//     const reset = () => {
//         setSeconds(0);
//         setRunning(false);
//     }

//     return (
//         <div>
//             <h1>Timer: {seconds}</h1>

//             <button onClick={start}>Start</button>
//             <button onClick={stop}>Stop</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }

// export default Timer;

// UseEffect to Show current window width and Update width when window resizes

// import { useState, useEffect } from "react";

// const WindowWidth = () => {
//     const [width, setWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth);
//         }

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         }
//     }, []);

//     return (
//         <div>
//             <h1>Width: {width}px</h1>
//         </div>
//     )
// }

// export default WindowWidth;

// UseEffect to Debounced Search Input, Create a search input, User types → wait 500ms → then log/search

// import { useState, useEffect } from "react";
// import axios from "axios";

// function TodoSearch() {
//   const [query, setQuery] = useState("");
//   const [debouncedQuery, setDebouncedQuery] = useState("");
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedQuery(query);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [query]);

//   useEffect(() => {
//     if (!debouncedQuery) {
//       setResults([]);
//       return;
//     }

//     const fetchTodos = async () => {
//       try {
//         const res = await axios.get(
//           "https://jsonplaceholder.typicode.com/todos"
//         );

//         const filtered = res.data.filter(todo =>
//           todo.title.toLowerCase().includes(debouncedQuery.toLowerCase())
//         );

//         setResults(filtered);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchTodos();
//   }, [debouncedQuery]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search todos..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       <ul>
//         {results.map(todo => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoSearch;

// UseEffect to Dependent Effects - Create 2 states userId and userData - When userId changes → fetch user data - Achieve Chain effects properly

// import { useState, useEffect } from "react";
// import axios from "axios";

// const DependentEffect = () => {
//     const [userId, setUserId] = useState(1);
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
//                 setUserData(res.data);
//             } catch (err) {
//                 console.error(err.message);
//             }
//         }
//         fetchData();
//     }, [userId]);

//     return (
//         <div>
//             <button onClick={() => setUserId(1)}>User 1</button>
//             <button onClick={() => setUserId(2)}>User 2</button>
//             <button onClick={() => setUserId(3)}>User 3</button>
//             <p>User Data: </p>
//             {userData && (
//                 <>
//                     <p>Name: {userData.name}</p>
//                     <p>Email: {userData.email}</p>
//                 </>
//             )}
//         </div>
//     )
// }

// export default DependentEffect;

// UseEffect to Create a bug intentionally - Update state inside useEffect without dependency array - Then fix it - Understand re-render cycles deeply

// import { useState, useEffect } from "react";

// function InfiniteLoop() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         setCount(count + 1);
//     }); // Issue is here cause dependency array is not mentioned. Add [] to stop it run once or add [count] with condition if(count<5) to run for 5 time

//     return <h1>{count}</h1>;
// }

// export default InfiniteLoop;

// UseEffect to Custom Hook with useEffect - Build your own hook - useWindowWidth() or useFetch(url) - To achieve Reusability + abstraction

// useWindowWidth()

// import { useState, useEffect } from "react";

// function useWindowWidth() {
//     const [width, setWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth);
//         }

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         }
//     });

//     return width;
// }

// const WindowWdith = () => {
//     const width = useWindowWidth();

//     return (
//         <div>
//             <p>Width: {width}px</p>
//         </div>
//     )
// }

// export default WindowWdith;

// useFetch(url)

// import { useState, useEffect } from "react";
// import axios from "axios";

// function useFetch(url) {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             if (!url) return;
//             const res = await axios.get(url)
//             setData(res.data);
//             setLoading(false)
//         }
//         fetchData();
//     }, [url]);

//     return { data, loading };
// }

// const FetchData = () => {
//     const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/todos");

//     if (loading) {
//         return <div>Loading...</div>
//     }

//     const styles = {
//         display: "flex",
//         gap: "10px"
//     }

//     return (
//         <>
//             {data.map((item) => (
//                 <div key={item.id} style={styles}>
//                     <p>{item.id}</p>
//                     <p>{item.title}</p>
//                 </div>
//             ))}
//         </>
//     )
// }

// export default FetchData;

// UseEffect to Sync with LocalStorage - Save input text to localStorage - On reload → restore value - To achieve On reload → restore value

// import { useState, useEffect } from "react";

// const LocalSaveData = () => {
//     const [text, setText] = useState('');

//     useEffect(() => {
//         const localData = localStorage.getItem('item')
//         if (localData) {
//             setText(localData);
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('item', text);
//     }, [text]);

//     const handleRemoveStorage = () => {
//         localStorage.removeItem('item');
//         setText('');
//     }

//     return (
//         <div>
//             <input
//                 type="text"
//                 name="text"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             />
//             {text && (
//                 <button onClick={handleRemoveStorage}>Clear</button>
//             )}
//         </div>
//     )
// }

// export default LocalSaveData;

// UseEffect to Multiple Effects Separation - Build a component that: * Fetches data * Updates title * Handles resize - Use multiple useEffects, not one - To Achieve Clean architecture

// import { useState, useEffect } from "react";
// import axios from "axios";

// const CleanComponent = () => {
//     const [count, setCount] = useState(0);
//     const [width, setWidth] = useState(window.innerWidth);
//     const [list, setList] = useState([]);

//     useEffect(() => {
//         document.title = `${count}`
//     }, [count]);

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth)
//         }

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         }
//     }, []);

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
//             setList(res.data);
//         }
//         fetchData();
//     }, []);

//     const increment = () => {
//         setCount(count + 1)
//     }
//     const decrement = () => {
//         setCount(count - 1)
//     }

//     const styles = {
//         display: "flex",
//         gap: "10px"
//     }

//     return (
//         <div>
//             <p>Width: {width}px</p>
//             <div style={styles}>
//                 <p>Count: </p>
//                 <button onClick={increment}>+</button>
//                 <p>{count}</p>
//                 <button onClick={decrement}>-</button>
//             </div>
//             {list.map((items) => (
//                 <div key={items.id} style={styles}>
//                     <p>{items.id}</p>
//                     <p>{items.title}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default CleanComponent;