
import Navbar from "./components/Navbar.jsx";
import MovieList from "./components/Movielist.jsx";
import movies from "./data/movies.js";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <section className="text-center py-20 px-6">

        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Discover Your Next
          <span className="text-blue-500"> Favorite Movie</span>
        </h1>

        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
          Explore an exciting collection of movies across different
          genres and discover stories worth watching.
        </p>

      </section>

      {/* Movie Collection */}
      <main className="max-w-7xl mx-auto px-6 pb-20">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            Popular Movies
          </h2>

          <p className="text-gray-400 mt-2">
            Explore our movie collection.
          </p>
        </div>

        <MovieList movies={movies} />

      </main>

      
      <footer className="bg-slate-900 text-center py-6">
        <p className="text-gray-400">
           &copy; 2026 MovieHub. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
