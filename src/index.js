import React from "react";
import App from "./App.js";
import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

reactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
