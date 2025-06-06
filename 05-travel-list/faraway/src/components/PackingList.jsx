import React from "react";
import Item from "./Item";
import "../index.css";



const PackingList = ({ items, onDelete }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDelete={onDelete} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
