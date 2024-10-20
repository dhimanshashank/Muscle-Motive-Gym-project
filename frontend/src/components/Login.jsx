import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#222] text-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center mb-4 open-sans">Login</h2>
        <p className="text-gray-400 text-center mb-6">Sign in to your account</p>

        <form>
          <div className="mb-3">
            <label className="block text-gray-400 mb-1" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-600 rounded-lg bg-white text-gray-700 focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="block text-gray-400 mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-600 rounded-lg bg-white text-gray-700 focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-300 open-sans font-semibold mt-2"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 mt-5">
          Don't have an account?{' '}
          <Link to="/signup" className="text-orange-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
