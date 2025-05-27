import React from "react";

const Pizza = ({ pizzObj }) => {
  return (
    <li className={`pizza ${pizzObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzObj.photoName} alt={pizzObj.name} />
      <div>
        <h3>{pizzObj.name}</h3>
        <p>{pizzObj.ingredients}</p>
        <span>{`${pizzObj.soldOut ? "SOLD OUT" : pizzObj.price + 3}`}</span>
      </div>
    </li>
  );
};

export default Pizza;
