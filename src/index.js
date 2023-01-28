import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { red } from '@mui/material/colors';
// import { green, purple } from '@mui/material/colors';

import { ThemeProvider, createTheme,responsiveFontSizes } from "@mui/material/styles";

import Typography from '@mui/material/Typography';



const theme = createTheme({
  // typography: {
  //   // Tell MUI what's the font-size on the html element is.
  //   // htmlFontSize: 25,?
  // },
  palette: {
    primary: {
      main:"#FF1D1D",
    },
    secondary: {
      main: "#F8F7FF",
    },
    danger:{
      main:"#FF1D1D0A"
    },
    success:{
      main:"#586D95"
    },
    info:{
      main:"#FF1D1D05"
    },
    error:{
      main:"#FCFCFC"
    },
    warning:{
      main:"#EAECEE"
    }
    
  },
});

// theme = responsiveFontSizes(theme);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
