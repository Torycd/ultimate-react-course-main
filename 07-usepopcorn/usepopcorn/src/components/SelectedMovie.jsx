import React, { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

const KEY = "79f76b4c";

const SelectedMovie = ({
  selectedId,
  handleCloseMovie,
  onAddWatched,
  watched,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsloadiing] = useState(false);
  const [userRating, setUserRating] = useState("");

  const counRef = useRef(0);

  useEffect(() => {
    if (userRating) counRef.current += 1;
  }, [userRating]);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watcheduserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;
  
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // const [abgrating, setAvgRating] = useState()
  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: runtime.split("").at(0), //
      userRating,
      countRatingDecisions: counRef.current,
    };
    onAddWatched(newWatchedMovie);
    handleCloseMovie();
  };

  useEffect(() => {
    const callback = (e) => {
      if (e.code === "Escape") {
        handleCloseMovie();
      }
    };
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [handleCloseMovie]);

  // const isTop = imdbRating > 0;
  // console.log(isTop)

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsloadiing(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await response.json();
        setMovie(data);
        setIsloadiing(false);
      } catch (err) {}
    };
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `MOVIE | ${title}`;

    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={handleCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <div className="rating">
            {!isWatched ? (
              <>
                <StarRating
                  maxRating={10}
                  size={24}
                  onSetRating={setUserRating}
                  defaultRating={imdbRating}
                />
                {userRating > 0 && (
                  <button className="btn-add" onClick={handleAdd}>
                    Add to list
                  </button>
                )}
              </>
            ) : (
              <p>
                You rated this movie {watcheduserRating}
                <span>⭐</span>
              </p>
            )}
          </div>
          <section>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default SelectedMovie;
