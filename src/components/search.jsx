import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarLogin = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Menyimpan input pengguna
  const navigate = useNavigate(); // Hook navigasi

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery.trim()}`); // Navigasi ke halaman search dengan query
    }
  };

  return (
    <nav className="flex">
      <input
        type="text"
        id="search-input"
        placeholder="Type your search..."
        className="block w-full px-4 py-2 rounded-l-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        id="search-button"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </nav>
  );
};

export default NavbarLogin;
