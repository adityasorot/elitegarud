import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { lightTheme } from "./components/Theme/Theme";
import { ThemeProvider } from "@material-ui/styles";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={lightTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
