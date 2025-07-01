import React from "react";
import IndividualMovie from "./IndividualMovie";

const WatchedMovieList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <IndividualMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
