import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./reset.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "localhost:3001";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
