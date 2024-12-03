import React from 'react';
import FormRegister from '../components/form/FormRegister';

const Register = () => {
  return (
    <>
    <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-3/2 flex flex-col justify-center px-20">
        <h1 className="text-2xl font-bold text-center mb-8">Get Started Now</h1>

        <FormRegister></FormRegister>

        <p className="mt-6 text-center text-sm text-gray-600">
          Have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-end h-screen">
        <img
          src="src/assets/photo1.jpg"
          alt="view"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </>
  );
};

export default Register;
