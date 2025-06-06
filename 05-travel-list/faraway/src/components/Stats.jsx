import React from "react";
import "../index.css";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing lists🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed === true).length;

  const perPacked = (numPackedItems * 100) / numItems;

  return (
    <footer className="stats">
      {perPacked === 100 ? (
        <em>You got everthing! ready to go ✈</em>
      ) : (
        <em>
          plane have {numItems} items on your list, and you already packed{" "}
          {numPackedItems} {`{${perPacked.toFixed(0)}%} `}
        </em>
      )}
    </footer>
  );
};

export default Stats;
