import React from "react";
import Router from "./routes/Router";
import "./index.css"  
import { ThemeProvider } from "@emotion/react";
import theme from "./constants/theme";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
    <Router/>
    </ThemeProvider>
  );
}

export default App;