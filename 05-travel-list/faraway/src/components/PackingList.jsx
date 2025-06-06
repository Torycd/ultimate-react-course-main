import React, { useState } from "react";
import Item from "./Item";
import "../index.css";

const PackingList = ({ items, onDelete, handleToggleItem }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedArray;
  if (sortBy === "input") sortedArray = items;
  // if (sortBy === "description")  
    return (
      <div className="list">
        <ul>
          {sortedArray.map((item) => (
            <Item
              onToggleItems={handleToggleItem}
              item={item}
              onDelete={onDelete}
              key={item.id}
            />
          ))}
        </ul>
        <div className="action">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort By Input Order</option>
            <option value="description">Sort By description</option>
            <option value="packed">Sort By Packed Status</option>
          </select>
        </div>
      </div>
    );
};

export default PackingList;
