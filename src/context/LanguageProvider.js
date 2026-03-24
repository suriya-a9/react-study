import { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";

const translations = {
    en: {
        greeting: "Hello",
        cart: "Cart"
    },
    ta: {
        greeting: "வணக்கம்",
        cart: "வண்டி"
    }
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "en";
    });

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "en" ? "ta" : "en"));
    };

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;