import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 border-b border-gray-200 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          AI Interview Prep
        </Link>

        {/* NAV LINKS */}

        <div className="flex items-center gap-6 text-gray-700 font-medium">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            Signup
          </Link>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;