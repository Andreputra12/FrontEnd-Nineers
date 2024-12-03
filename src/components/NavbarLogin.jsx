import React, { useState } from 'react';
import Search from "../components/search";

const Home = () => {
  // State untuk mengontrol visibilitas dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fungsi untuk toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Fungsi untuk menutup dropdown saat klik di luar
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

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
                {/* SVG content */}
              </svg>
              <a href="#" className="font-bold text-2xl">Nineers</a>
            </div>
            {/* search bar */}
            <div className="search-bar">
              <Search />
            </div>
          </div>

          <div className="relative flex items-center">
            {/* Button untuk membuka/menutup dropdown */}
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-12 h-12 rounded-full"
                src="src/assets/testimoni/ben.jpg"
                alt="user photo"
              />
            </button>

            {/* Dropdown */}
            <div
              className={`absolute ${
                isDropdownOpen ? "block" : "hidden"
              } text-base list-none bg-white border rounded-lg shadow-md z-50 w-48 mt-2`}
              style={{ top: "100%", right: "-150%" }} // Tambahkan posisi di bawah
              id="user-menu"
            >
              <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="/edit"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Edit Profile
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
      </header>
    </div>
  );
};

export default Home;
