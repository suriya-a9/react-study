import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CounterContext } from "../context/CounterContext";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { count, increment, decrement } = useContext(CounterContext);
    const { language, toggleLanguage, translations } = useContext(LanguageContext);

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>

            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

            <h1>{translations[language].greeting}</h1>
            <button onClick={toggleLanguage}>switch to {language === "en" ? "ta" : "en"}</button>
        </div>
    );
};

export default Navbar;