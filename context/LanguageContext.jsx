"use client";

import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("id");

    // Ambil bahasa yang tersimpan di browser
    useEffect(() => {
        const savedLanguage =
            localStorage.getItem("language");

        if (
            savedLanguage === "en" ||
            savedLanguage === "id"
        ) {
            setLanguage(savedLanguage);
        }
    }, []);

    // Simpan pilihan bahasa
    useEffect(() => {
        localStorage.setItem(
            "language",
            language
        );
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((current) =>
            current === "id"
                ? "en"
                : "id"
        );
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                toggleLanguage,
                isEnglish:
                    language === "en",
                isIndonesian:
                    language === "id",
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}