import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Erorba from "./components/pages/erorboundry";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Erorba>
  <Router>
    <App />
  </Router>
  </Erorba>,
  document.getElementById("root")
);
