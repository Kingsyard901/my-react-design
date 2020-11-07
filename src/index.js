import React from "react";
import ReactDOM from "react-dom";
import Navigation from "../src/components/Navigation";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <App />
  </React.StrictMode>,
  rootElement
);