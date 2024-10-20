import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      axios
        .post("http://localhost:5000/signup", {
          name,
          email,
          password,
        })
        .then((response) => {
          console.log(response.data);
          alert("Signup successful");
          window.location.href = "/login";
        })
        .catch((error) => {
          console.log(error);
          alert("Signup failed");
        });
    }; 

    return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#222] text-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center mb-4 open-sans">Sign Up</h2>
        <p className="text-gray-400 text-center mb-6">Create your account to get started</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-400 mb-1" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-600 rounded-lg bg-white text-gray-700 focus:ring focus:ring-blue-500"
              placeholder="Enter your full name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-400 mb-1" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-600 rounded-lg bg-white text-gray-700 focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-400 mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 border border-gray-600 rounded-lg bg-white text-gray-700 focus:ring focus:ring-blue-500"
              placeholder="Confirm your password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-300 open-sans font-bold px-4 mt-2"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 mt-5">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
