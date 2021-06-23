import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import MinionProvider from "./store/MinionProvider";

ReactDOM.render(
  <React.StrictMode>
    <MinionProvider>
      <App />
    </MinionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
