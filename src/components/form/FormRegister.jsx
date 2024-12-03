import React from "react";

const SignupForm = () => {
  return (
    <form action="">
      {/* Full Name Input */}
      <div className="mb-4">
        <label
          htmlFor="fname"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Your Full Name
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Full Name"
          required
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Username Input */}
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

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

      {/* Agree to Terms */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          value="remember"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label
          htmlFor="remember"
          className="ml-2 block text-sm text-gray-600"
        >
          I agree to the <strong>terms & policy</strong>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-green-700"
      >
        Login
      </button>
    </form>
  );
};

export default SignupForm;
