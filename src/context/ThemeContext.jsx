"use client"

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

//getting theme data from local storage
const getFromLocalStorage = () => {

    //check if the window has transitioned from server to client side
    //we can only access localStorage from client side
    //but the page is server side
    if(typeof window !== undefined){
        const value = localStorage.getItem("theme");
        return value || "dark";
    }

}

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
      localStorage.setItem("theme",theme);

    }, [theme]);
    

    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}