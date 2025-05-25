import React from "react";
import ReactDOM from "react-dom/client";
import DATA from "./data";

function App() {
  return <Pizza />;
}

function Pizza() {
  return (
    <div>
      <h2>Pizza</h2>
      <p>Tomato, mozarella, spinach, and rioctta cheese</p>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
