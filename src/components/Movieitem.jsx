function MovieItem({ movie }) {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{movie.title}</h3>

        <p className="text-blue-400 mt-2">{movie.genre}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-gray-400">{movie.year}</span>

          <span className="text-yellow-400"> {movie.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
