import React from "react";
import ReactDOM from "react-dom";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <App />
    <Footer />
  </React.StrictMode>,
  rootElement
);