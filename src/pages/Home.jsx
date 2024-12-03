import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLogin from '../components/NavbarLogin';
import HeroLogin from '../components/HeroLogin';
import CardWeb from '../components/card/CardWeb';
import CardSoftware from '../components/card/CardSoftware';
import CardAndroid from '../components/card/CardAndroid';
import CardGraphic from '../components/card/CardGraphic';
// import Card from '../components/card/Card';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate(); // Hook untuk navigasi ke halaman lain

  const handleCardClick = (id) => {
    navigate(`/order/${id}`); // Navigasi ke halaman Order dengan ID pekerja
  };

  return (
    <div>
      <NavbarLogin />
      <HeroLogin />
      {/* <Card></Card> */}
      <h1 className='px-10 font-bold text-2xl'>Web Development</h1> 
      <CardWeb></CardWeb>
      <h1 className='px-10 font-bold text-2xl'>Software Development</h1>
      <CardSoftware></CardSoftware>
      <h1 className='px-10 font-bold text-2xl'>Android Development</h1>
      <CardAndroid></CardAndroid>
      <h1 className='px-10 font-bold text-2xl'>Graphic Desaign</h1>
      <CardGraphic></CardGraphic>
      <Footer />
    </div>
  );
};

export default Home;
