import React from 'react';
import Navbar from "../components/Navbar";  // Komponen Navbar
import Hero from "../components/Hero";      // Komponen Hero
import Category from "../components/Category";  // Komponen Category
import Why from "../components/Why";        // Komponen Why
import TopWorkers from "../components/TopWorkers";  // Komponen TopWorkers
import Review from "../components/Review";  // Komponen Review
import Faq from "../components/Faq";        // Komponen Faq
import Footer from "../components/Footer";  // Komponen Footer

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Why />
      <TopWorkers />
      <Review />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;
