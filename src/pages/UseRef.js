// When the page loads → input should auto-focus & When user clicks a button → page scrolls to a specific section

// import { useRef, useEffect } from "react";

// const UseRef = () => {
//     const inputRef = useRef();
//     const sectionRef = useRef();

//     useEffect(() => {
//         inputRef.current.focus();
//     }, []);

//     const scrollToView = () => {
//         sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//     }

//     return (
//         <div>
//             <input
//                 ref={inputRef}
//                 type="text"
//             />
//             <br />
//             <button onClick={scrollToView}>Scroll to the section</button>
//             <div style={{ height: '800px' }}></div>
//             <div ref={sectionRef}>This is the section</div>
//         </div>
//     )
// }

// export default UseRef;


// Login Form with Auto-Focus + Validation


// import { useRef } from "react";

// const UseRef = () => {
//     const EmailRef = useRef();
//     const PasswordRef = useRef();

//     const hanldeSubmit = (e) => {
//         e.preventDefault();
//         const email = EmailRef.current.value;
//         const password = PasswordRef.current.value;

//         if (!email) {
//             EmailRef.current.style.border = "1px solid red";
//             EmailRef.current.focus();
//             alert("Email required");
//             return;
//         }

//         if (!password) {
//             PasswordRef.current.style.border = "1px solid red"
//             PasswordRef.current.focus();
//             alert("Email required");
//             return;
//         }

//         alert("Form submitted");
//     }

//     return (
//         <div>
//             <input
//                 ref={EmailRef}
//                 type="email"
//             />
//             <input
//                 ref={PasswordRef}
//                 type="password"
//             />
//             <button onClick={hanldeSubmit}>Submit</button>
//         </div>
//     )
// }

// export default UseRef;


// Open / Close Modal using useRef

// import { useRef } from "react";

// const UseRef = () => {
//     const modalRef = useRef();

//     const openModal = () => {
//         modalRef.current.style.display = "block";
//     };

//     const closeModal = () => {
//         modalRef.current.style.display = "none";
//     };

//     return (
//         <div>
//             <button onClick={openModal}>Open modal</button>
//             <div style={{
//                 display: 'none',
//                 position: 'fixed',
//                 top: '30%',
//                 left: '30%'
//             }}>
//                 <p>This is the modal</p>
//                 <button onClick={closeModal}>Close</button>
//             </div>
//         </div>
//     )
// }

// export default UseRef;

// Using useRef for Timers

// import { useRef, useState } from "react";

// function TimerExample() {
//     const timerRef = useRef(null);
//     const [count, setCount] = useState(0);

//     const startTimer = () => {
//         if (timerRef.current) return;

//         timerRef.current = setInterval(() => {
//             setCount((prev) => prev + 1);
//         }, 1000);
//     };

//     const stopTimer = () => {
//         clearInterval(timerRef.current);
//         timerRef.current = null;
//     };

//     return (
//         <div>
//             <h2>Count: {count}</h2>

//             <button onClick={startTimer}>Start</button>
//             <button onClick={stopTimer}>Stop</button>
//         </div>
//     );
// }

// export default TimerExample;


// Using useRef to store previous value

import { useRef, useState, useEffect } from "react";

const UseRef = () => {
    const [count, setCount] = useState(0);
    const prevCount = useRef();
    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <p>Previous count: {prevCount.current}</p>
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default UseRef;