import React from "react";
import ReactDOM from "react-dom";
import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import "./styles/settings/size.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
