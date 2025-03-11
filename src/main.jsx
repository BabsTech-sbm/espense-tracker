import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext"; // ✅ Import ThemeProvider
import { ExpenseProvider } from "./context/ExpenseContext"; // ✅ Import ThemeProvider
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // ✅ Import Tailwind

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
<ExpenseProvider>

    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
</ExpenseProvider>
  
  </React.StrictMode>
);
