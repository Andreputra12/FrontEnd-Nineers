import React from 'react';

const FormLogin = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
      <p className="text-center text-gray-600 mb-6">Please login to your account</p>
      <form action="">
        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Remember Checkbox */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            value="remember"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">
            Remember for 30 days
          </label>
        </div>

        {/* Login Button */}
        <a href='/home'>
          <button type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-green-700">
          Login
          </button>
        </a>
      </form>
    </div>
  );
};

export default FormLogin;
