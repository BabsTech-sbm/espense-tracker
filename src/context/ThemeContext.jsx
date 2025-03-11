import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();



export function ThemeProvider({ children }) {
  // Load theme from localStorage or system preference
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkMode, setDarkMode] = useState(
    storedTheme ? storedTheme === "dark" : prefersDark
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // ✅ Apply to <html>
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
