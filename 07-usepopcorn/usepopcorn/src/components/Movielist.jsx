import Movie from "./Movie";
import "../index.css";
// import WatchedBox from "./WatchedBox";

const Movielist = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie onSelectMovie={onSelectMovie} movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default Movielist;
