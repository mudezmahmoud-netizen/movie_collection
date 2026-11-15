import MovieItem from "./Movieitem.jsx";

function MovieList({ movies }) {
  return (
    <div
      id="movies"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
