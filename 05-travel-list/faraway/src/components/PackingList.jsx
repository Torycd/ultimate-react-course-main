import React from "react";
import Item from "./Item";
import "../index.css";



const PackingList = ({ items, onDelete, handleToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item onToggleItems={handleToggleItem} item={item} onDelete={onDelete} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
