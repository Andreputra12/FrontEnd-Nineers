import React from "react";
import { useLocation } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";
import CardWeb from "../components/card/CardWeb";
import CardSoftware from "../components/card/CardSoftware";
import CardAndroid from "../components/card/CardAndroid";
import CardGraphic from "../components/card/CardGraphic";

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase(); // Ambil query dari URL

  // Mapping data kategori ke komponen
  const categories = {
    "web development": <CardWeb />,
    "software development": <CardSoftware />,
    "android development": <CardAndroid />,
    "graphic design": <CardGraphic />,
  };

  const result = categories[query] || <p className="text-center text-red-500">Not Found</p>;

  return (
    <div>
      <NavbarLogin />
      <div className="px-10 py-5">
        <h1 className="text-2xl font-bold">Search Result for: {query || "None"}</h1>
        <div className="mt-5">{result}</div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
