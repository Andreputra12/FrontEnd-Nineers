import React from 'react'
import FormLogin from '../components/form/FormLogin';

const LoginPage = () => {
  return (
    <div>
    <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
  {/* Text Section */}
  <div className="w-full md:w-3/2 flex flex-col justify-center pl-40 pr-20">
    <h1 className="text-2xl font-bold text-center mb-4">Welcome To Nineers</h1>
    <p className="text-center text-gray-600 mb-6">A place where you can flex</p>

    <FormLogin></FormLogin>

    <p className="mt-6 text-center text-sm text-gray-600">
      Don't have an account?{" "}
      <a href="/register" className="text-indigo-600 hover:underline">
        Sign Up
      </a>
    </p>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-end h-screen">
    <img
      src="src/assets/photo1.jpg"
      alt="view"
      className="w-full h-full object-cover"
    />
  </div>
</div>
</div>

  )
}

export default LoginPage