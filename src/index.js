import React from "react";
import App from "./App.js";
import reactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
// import Container from "./components/Context/Container.js";

reactDOM.render(
  // <Container>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
