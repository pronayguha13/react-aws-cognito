import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BrowserRoutes from "./routes";
import { Login } from "./global/LoginContext";

ReactDOM.render(
  <React.StrictMode>
    <Login>
      <BrowserRoutes>
        <App />
      </BrowserRoutes>
    </Login>
  </React.StrictMode>,
  document.getElementById("root")
);
