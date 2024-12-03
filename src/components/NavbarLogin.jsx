import React from 'react';
import Search from "../components/search"

const Home = () => {
  return (
    <div>
      <header>
        <div className="flex items-center justify-between px-20 py-5 bg-[#DFE8D3]">
          <div className="flex items-center gap-x-10">
            <div className="flex items-center gap-x-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3572 30.9758L30.9765 22.3564"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.6432 22.3564L9.02383 30.9758"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.3572 17.6428L30.9765 9.02344"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.02383 17.6428L17.6432 9.02344"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 6.66634C10 8.50726 8.50759 9.99967 6.66668 9.99967C4.82573 9.99967 3.33334 8.50726 3.33334 6.66634C3.33334 4.82539 4.82573 3.33301 6.66668 3.33301C8.50759 3.33301 10 4.82539 10 6.66634Z"
                  fill="#2F88FF"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.3334 6.66634C23.3334 8.50726 21.8409 9.99967 20 9.99967C18.1591 9.99967 16.6667 8.50726 16.6667 6.66634C16.6667 4.82539 18.1591 3.33301 20 3.33301C21.8409 3.33301 23.3334 4.82539 23.3334 6.66634Z"
                  fill="#2F88FF"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.6667 6.66634C36.6667 8.50726 35.1743 9.99967 33.3333 9.99967C31.4924 9.99967 30 8.50726 30 6.66634C30 4.82539 31.4924 3.33301 33.3333 3.33301C35.1743 3.33301 36.6667 4.82539 36.6667 6.66634Z"
                  fill="#2F88FF"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.6667 19.9993C36.6667 21.8403 35.1743 23.3327 33.3333 23.3327C31.4924 23.3327 30 21.8403 30 19.9993C30 18.1584 31.4924 16.666 33.3333 16.666C35.1743 16.666 36.6667 18.1584 36.6667 19.9993Z"
                  fill="#2F88FF"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.6667 33.3333C36.6667 35.1743 35.1743 36.6667 33.3333 36.6667C31.4924 36.6667 30 35.1743 30 33.3333C30 31.4924 31.4924 30 33.3333 30C35.1743 30 36.6667 31.4924 36.6667 33.3333Z"
                  fill="#2F88FF"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.3334 33.3333C23.3334 35.1743 21.8409 36.6667 20 36.6667C18.1591 36.6667 16.6667 35.1743 16.6667 33.3333C16.6667 31.4924 18.1591 30 20 30C21.8409 30 23.3334 31.4924 23.3334 33.3333Z"
                  fill="#2F88FF"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 33.3333C10 35.1743 8.50759 36.6667 6.66668 36.6667C4.82573 36.6667 3.33334 35.1743 3.33334 33.3333C3.33334 31.4924 4.82573 30 6.66668 30C8.50759 30 10 31.4924 10 33.3333Z"
                  fill="#2F88FF"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 19.9993C10 21.8403 8.50759 23.3327 6.66668 23.3327C4.82573 23.3327 3.33334 21.8403 3.33334 19.9993C3.33334 18.1584 4.82573 16.666 6.66668 16.666C8.50759 16.666 10 18.1584 10 19.9993Z"
                  fill="#2F88FF"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.3334 19.9993C23.3334 21.8403 21.8409 23.3327 20 23.3327C18.1591 23.3327 16.6667 21.8403 16.6667 19.9993C16.6667 18.1584 18.1591 16.666 20 16.666C21.8409 16.666 23.3334 18.1584 23.3334 19.9993Z"
                  fill="#2F88FF"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <a href="#" className="font-bold text-2xl">Nineers</a>
            </div>
            {/* search bar */}
            <div className="search-bar">
              <Search />
            </div>
          </div>

          <div className="relative flex items-center">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-12 h-12 rounded-full"
                src="src/assets/testimoni/ben.jpg"
                alt="user photo"
              />
            </button>

            <div
              className="absolute hidden text-base list-none bg-white border rounded-lg shadow-md right-0 z-50"
              id="user-menu"
            >
              <div className="py-3 px-4 text-sm text-gray-900">
                <span className="block">Ben</span>
                <span className="block">Software Engineer</span>
              </div>
              <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
                {/* <div className="flex justify-center gap-x-40 border-b border-b-black-300 p-3 shadow-md">
                  <div className="group relative">
                    <a href="detailweb.html" className="hover:text-blue-500">
                      Web Development
                    </a>
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                  </div>
                  <div className="group relative">
                    <a href="detailsoftware.html" className="hover:text-blue-500">
                      Software Development
                    </a>
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                  </div>
                  <div className="group relative">
                    <a href="detailandroid.html" className="hover:text-blue-500">
                      Android Development
                    </a>
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                  </div>
                  <div className="group relative">
                    <a href="detailgraphic.html" className="hover:text-blue-500">
                      Graphic & Design
                    </a>
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                  </div>
                </div> */}
      </header>
    </div>
  );
};

export default Home;
