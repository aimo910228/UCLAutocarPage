import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Page from './Page';
import Footer from './Footer'
import Header from './Header';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("header-example")).render(
  <React.StrictMode>
    <Header name="" />
  </React.StrictMode>);

ReactDOM.createRoot(document.getElementById("footer-example")).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
