import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import image2 from "../img/safed.jpeg";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
    navigate("/todo");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 lg:p-12">
      <div className="w-full max-w-lg lg:max-w-xl bg-white rounded-lg shadow-md p-8 lg:p-12">
        <div className="flex items-center justify-center mb-8">
          <img
            src={image2}
            alt="Do It Logo"
            className="h-12 w-12 lg:h-16 lg:w-16 text-green-600"
          />
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 ml-3 lg:ml-4">
            Welcome to Do It
          </h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-3 lg:space-y-4">
            <label
              htmlFor="email"
              className="block text-lg lg:text-xl font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 lg:px-5 lg:py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-3 lg:space-y-4">
            <label
              htmlFor="password"
              className="block text-lg lg:text-xl font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 lg:px-5 lg:py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 lg:py-4 px-5 lg:px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 text-lg lg:text-xl"
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-lg lg:text-xl text-gray-600">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
