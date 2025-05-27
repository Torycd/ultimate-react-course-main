import React from "react";
import "../index.css";
import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //   if (hour >= openHour && hour <= closeHour) alert("we're currently open");
  //   else alert("Sorry we're close");
  return (
    <footer className="footer">
      {/* This is called short circuiting */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to wlecome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
      {/* {new Date().toLocaleTimeString()} We're currently open */}
    </footer>
  );
};

export default Footer;
