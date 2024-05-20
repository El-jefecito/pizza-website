import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context)
    throw new Error("useDarkMode must be used within DarkModeProvider");

  return context;
};

export { DarkModeProvider, useDarkMode };
