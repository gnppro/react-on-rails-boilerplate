import React from "react";
import ReactDOM from "react-dom";
import App from "../containers/App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.body.appendChild(document.createElement("div"))
  );
});
