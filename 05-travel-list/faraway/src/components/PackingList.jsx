import React, { useState } from "react";
import Item from "./Item";
import "../index.css";

const PackingList = ({ items, onDelete, handleToggleItem, onClear }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedArray;
  if (sortBy === "input") sortedArray = items;
  if (sortBy === "description")
    sortedArray = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedArray = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
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
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
