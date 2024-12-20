import React from 'react';
import { useNavigate } from 'react-router-dom';

// Data pekerja
const workerData = [
  {
    id: 13,
    imageSrc: "src/assets/software dev img/gambar web 5.jpeg",
    imageAlt: "Alex Carter - Software Development",
    name: "Alex Carter",
    role: "as Software Development",
    profileImageSrc: "/assets/testimoni/ben.jpg",
    rating: 4.95,
    ratingCount: 5,
    description: "I develop robust web applications tailored to your needs, focusing on scalability and intuitive user experiences.",
    startingPrice: "Rp 600.000",
  },
  {
    id: 14,
    imageSrc: "src/assets/Software Developments/image2.jpg",
    imageAlt: "Kate Nile - Software Development",
    name: "Kate Nile",
    role: "as Software Development",
    profileImageSrc: "/assets/testimoni/customer-1.jpg",
    rating: 4,
    ratingCount: 5,
    description: "I specialize in crafting mobile apps with seamless functionality and cross-platform compatibility.",
    startingPrice: "Rp 500.000",
  },
  {
    id: 15,
    imageSrc: "src/assets/Software Developments/image4.webp",
    imageAlt: "Michael Davis - Software Development",
    name: "Michael Davis",
    role: "as Software Development",
    profileImageSrc: "/assets/testimoni/customer-2.jpg",
    rating: 5,
    ratingCount: 5,
    description: "I create custom software solutions for businesses, optimizing workflows and driving digital transformation.",
    startingPrice: "Rp 800.000",
  },
  {
    id: 16,
    imageSrc: "src/assets/Software Developments/image5.webp",
    imageAlt: "David Lee - Software Development",
    name: "David Lee",
    role: "as Software Development",
    profileImageSrc: "/assets/testimoni/customer-4.jpg",
    rating: 4,
    ratingCount: 5,
    description: "I build efficient cloud-based applications, leveraging the latest technologies for scalability.",
    startingPrice: "Rp 480.000",
  },
];

const SoftwareDevelopmentSection = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-x-10 p-10">
      {workerData.map((worker) => (
        <div
          key={worker.id}
          className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4 cursor-pointer"
          onClick={() => navigate(`/order/${worker.id}`)} // Memperbaiki penggunaan template literal
        >
          <img
            src={worker.imageSrc}
            alt={worker.imageAlt || worker.name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-gray-800">{worker.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{worker.description}</p>
            <p className="text-primary font-bold mt-3">{worker.startingPrice}</p>
            <p className="text-yellow-500 mt-2">
              {"⭐".repeat(Math.round(worker.rating))}{" "}
              <span className="text-gray-600">({worker.rating})</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftwareDevelopmentSection;

