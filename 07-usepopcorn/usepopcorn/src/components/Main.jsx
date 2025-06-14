import React, { useState } from "react";
import List from "./List";
import WatchedBox from "./WatchedBox";

const Main = ({ tempMovieData, tempWatchedData }) => {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <main className="main">
      <List movies={movies} />
      <WatchedBox tempWatchedData={tempWatchedData} />
    </main>
  );
};

export default Main;
