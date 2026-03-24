import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CounterContext } from "../context/CounterContext";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { count, increment, decrement } = useContext(CounterContext);

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>

            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Navbar;