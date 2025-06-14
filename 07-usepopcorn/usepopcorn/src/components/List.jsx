import React, { useState } from "react";
import Movielist from "./Movielist";

const List = ({ movies }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <Movielist movies={movies} />}
    </div>
  );
};

export default List;
