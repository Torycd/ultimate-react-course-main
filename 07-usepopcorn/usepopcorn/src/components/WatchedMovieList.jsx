import React from "react";
import IndividualMovie from "./IndividualMovie";

const WatchedMovieList = ({ watched, handleDeleteWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <IndividualMovie handleDeleteWatched={handleDeleteWatched} movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
