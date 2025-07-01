import Movie from "./Movie";
// import WatchedBox from "./WatchedBox";

const Movielist = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default Movielist;
