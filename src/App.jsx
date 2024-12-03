import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Mengimpor Router dan Route
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OrderPage from './pages/OrderPage';
import SearchPage from './pages/SearchPage';
import EditPage from './pages/EditPage';
import WebDevelopment from './pages/WebDevelopment';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import AndroidDevelopment from './pages/AndroidDevelopment';
import GraphicDesign from './pages/GraphicDesign';

function App() {
  return (
    <Router>  {/* Menggunakan Router untuk menavigasi antar halaman */}
      <Routes>
        {/* Mengatur route untuk halaman LandingPage */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Mengupdate path untuk OrderPage dengan parameter workerId */}
        <Route path="/order/:workerId" element={<OrderPage />} /> 
        <Route path="/search" element={<SearchPage />} /> 
        <Route path="/edit" element={<EditPage />} /> 
        <Route path="/WebDevelopment" element={<WebDevelopment />} /> 
        <Route path="/SoftwareDevelopment" element={<SoftwareDevelopment />} /> 
        <Route path="/AndroidDevelopment" element={<AndroidDevelopment />} /> 
        <Route path="/GraphicDesign" element={<GraphicDesign />} /> 
      </Routes>
    </Router>
  );
}

export default App;
