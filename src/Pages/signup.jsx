import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Signup
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Signup
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;