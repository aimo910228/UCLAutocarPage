import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Page from "./Page";

/**
 * https://stackoverflow.com/questions/70705818/react-router-dom-displays-nothing-when-using-route
 */

export default function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/"></Link>
        <Link to="/shop"></Link>
        <Routes>
          <Route path="/" element={<Page />} />
        </Routes>
      </Router>
    </div>
  );
}
