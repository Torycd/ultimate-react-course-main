import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} />
    {/* <App /> */}
  </React.StrictMode>
);
