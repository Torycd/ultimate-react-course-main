import React from "react";
import Pizza from "../index.js";
import "../index.css";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
};

export default Menu;
