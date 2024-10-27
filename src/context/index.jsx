import { createContext, useState, use, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContextConsumer = () => {
  const themeMode = useContext(ThemeContext);
  if (themeMode === undefined) {
    throw new Error(
      "Component must be wrapped inside the Theme Context Provider"
    );
  }
  return themeMode;
};
