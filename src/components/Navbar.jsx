function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-6 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          Movie<span className="text-blue-500">Hub</span>
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>

          <a href="#movies" className="hover:text-blue-400">
            Movies
          </a>

          <a href="#about" className="hover:text-blue-400">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
