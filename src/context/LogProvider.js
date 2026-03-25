import { useState, useEffect } from "react";
import { LogContext } from "./LogContext";

const user = {
    name: "Suriya"
}

const LogProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(() => {
        return JSON.parse(localStorage.getItem("loggin")) || false;
    })

    const loggin = () => {
        if (loggedIn) {
            setLoggedIn(false)
        } else {
            setLoggedIn(true)
        }
    }

    useEffect(() => {
        localStorage.setItem("loggin", JSON.stringify(loggedIn));
    }, [loggedIn]);

    return (
        <LogContext.Provider value={{ loggedIn, loggin, user }}>
            {children}
        </LogContext.Provider>
    )
}

export default LogProvider;