import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../src/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

import Typography from "@mui/material/Typography";

const theme = createTheme({
  // typography: {
  //   // Tell MUI what's the font-size on the html element is.
  //   // htmlFontSize: 25,?
  // },
  palette: {
    primary: {
      main: "#FF1D1D",
    },
    secondary: {
      main: "#EAECEE",
    },
    success: {
      main: "#F7F8FF",
    },
    danger: {
      main: " rgba(255, 29, 29, 0.04)",
    },
    info: {
      main: "#586D95",
    },
    error: {
      main: "#FCFCFC",
    },
    wite: {
      main: "#FFFFFF",
    },
    gray: {
      main: "#d1d5db",
    },
  },
});

// theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
