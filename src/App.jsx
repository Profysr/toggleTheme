import React from "react";
import { ThemeProvider } from "./context";
import DarkLight from "./DarkLight";

const App = () => {
  return (
    <ThemeProvider>
      <DarkLight />
    </ThemeProvider>
  );
};

export default App;
