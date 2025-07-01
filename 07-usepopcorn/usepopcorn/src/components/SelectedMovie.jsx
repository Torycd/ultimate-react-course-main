import React, { useEffect, useState } from "react";

const KEY = "79f76b4c";
const SelectedMovie = ({ selectedId, handleCloseMovie }) => {
    const [movie, setMovie] = useState({})
    const {} = movie
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (err) {}
    };
    getMovieDetails();
  }, [selectedId]);
  return (
    <>
      <div className="details">
        <button onClick={handleCloseMovie}>&larry;</button>
        {selectedId}
      </div>
    </>
  );
};

export default SelectedMovie;
