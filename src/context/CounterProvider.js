import { useState, useEffect } from "react";
import { CounterContext } from "./CounterContext";

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(() => {
        return Number(localStorage.getItem("count")) || 0;
    });

    const increment = () => {
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        setCount(prev => prev - 1);
    };

    // ✅ Sync with localStorage whenever count changes
    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterProvider;