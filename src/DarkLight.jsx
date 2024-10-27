import React from "react";
import { ThemeContextConsumer } from "./context";

const DarkLight = () => {
  const { theme, handleToggleTheme } = ThemeContextConsumer();

  return (
    <div
      className={`flex flex-col h-lvh w-lvw justify-center items-center gap-6 ${
        theme === "dark" ? "bg-darkBg" : "bg-lightBg"
      }`}
    >
      <h1
        className={`text-xl ${
          theme === "dark" ? "text-lightText" : "text-darkText"
        } `}
      >
        Dark Light Toggle Functionality
      </h1>
      <p
        className={`text-lg ${
          theme === "dark" ? "text-lightText" : "text-darkText"
        }`}
      >
        Just click the button below{" "}
      </p>
      <button
        className={`${
          theme === "dark" ? "bg-orange-500" : "bg-blue-600"
        } rounded-md transition duration-300 text-white p-4 font-bold text-lg`}
        onClick={handleToggleTheme}
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default DarkLight;
