import React from 'react';
import { useNavigate } from 'react-router-dom';

// Data pekerja
const workerData = [
  {
    id: 9,
    imageSrc: "src/assets/Graphic Design/image5.jpg",
    imageAlt: "Liam Mitchell - Graphic Design",
    name: "Liam Mitchell",
    role: "as Graphic Design",
    profileImageSrc: "/assets/testimoni/ben.jpg",
    rating: 4.95,
    ratingCount: 5,
    description: "I specialize in designing eye-catching logos, brochures, and digital assets tailored to your business needs.",
    startingPrice: "Rp 550.000",
  },
  {
    id: 10,
    imageSrc: "src/assets/Graphic Design/image2.jpeg",
    imageAlt: "Ava Johnson - Graphic Design",
    name: "Ava Johnson",
    role: "as Graphic Design",
    profileImageSrc: "/assets/testimoni/customer-1.jpg",
    rating: 4,
    ratingCount: 5,
    description: "I craft modern and professional graphic designs, from branding materials to social media visuals.",
    startingPrice: "Rp 450.000",
  },
  {
    id: 11,
    imageSrc: "src/assets/Graphic Design/image6.png",
    imageAlt: "Noah Robert - Graphic Design",
    name: "Noah Robert",
    role: "as Graphic Design",
    profileImageSrc: "/assets/testimoni/customer-2.jpg",
    rating: 5,
    ratingCount: 5,
    description: "I deliver creative and impactful graphic solutions, focusing on functionality to leave a lasting impression.",
    startingPrice: "Rp 600.000",
  },
  {
    id: 12,
    imageSrc: "src/assets/Graphic Design/image9.jpg",
    imageAlt: "Torres Paye - Graphic Design",
    name: "Torres Paye",
    role: "as Graphic Design",
    profileImageSrc: "/assets/testimoni/customer-4.jpg",
    rating: 4,
    ratingCount: 5,
    description: "I design unique, custom graphics that bring your ideas to life, ensuring your brand stands out in any medium.",
    startingPrice: "Rp 400.000",
  },
];

const GraphicDevelopmentSection = () => {
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

export default GraphicDevelopmentSection;
