import WatchedBox from "./WatchedBox";

const Movielist = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <WatchedBox movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default Movielist;
