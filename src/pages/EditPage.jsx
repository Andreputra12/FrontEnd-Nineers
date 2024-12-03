import React from 'react'
import FormEdit from '../components/form/FormEdit'
import NavbarLogin from '../components/NavbarLogin'
import Footer from '../components/Footer'

const EditPage = () => {
  return (
    <div>
    <NavbarLogin></NavbarLogin>

    <main className="py-10">
    <div className="container mx-auto max-w-4xl">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Edit Profile</h1>
        <p className="text-gray-600">
          Update your account information and settings
        </p>
      </div>

      {/* Edit Profile Form */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <img
              src="src/assets/testimoni/ben.jpg"
              alt="Profile Picture"
              className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
            />
            <button
              className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
              title="Change Picture"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.732l-7.036 7.036a4 4 0 11-1.414-1.414l7.036-7.036a2 2 0 012.828 2.828z"
                />
              </svg>
            </button>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            Bonnie Green
          </h2>
          <p className="text-gray-600 text-sm">name@flowbite.com</p>
        </div>

        <FormEdit></FormEdit>

        {/* Save Changes Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </main>

  <Footer></Footer>
  </div>
  )
}

export default EditPage