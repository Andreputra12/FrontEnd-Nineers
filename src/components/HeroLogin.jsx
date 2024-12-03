import React from 'react';

const HeroLogin = () => {
  return (
    <section className="relative bg-gray-900 text-white mb-32">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Programming & Tech</h1>
          <p className="text-lg mb-6">
            CourseID akan mengajarkan Anda sesuai skill yang Anda inginkan
            secara lengkap dan praktis. Dengan metode mudah dipahami dan
            latihan yang efektif.
          </p>
          <button className="bg-zinc-500 text-white py-2 px-4 rounded hover:bg-zinc-600">
            Explore More
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="src/assets/software dev img/web it.webp"
            alt="Hero Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroLogin;
