import React from "react";
import Item from "./Item";
import "../index.css";

const PackingList = ({ initialItems }) => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
