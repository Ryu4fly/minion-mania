import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartCtxProvider from "./store/CartCtxProvider";

ReactDOM.render(
  <CartCtxProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartCtxProvider>,
  document.getElementById("root")
);
