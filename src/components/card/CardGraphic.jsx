import React from 'react';

const workerData= [
  {
    id: 1,
    imageSrc: "src/assets/Graphic Design/image5.jpg",
    imageAlt: "",
    name: "Liam Mitchell",
    role: "as Graphic Desaign",
    profileImageSrc: "/assets/testimoni/ben.jpg",
    rating: 4.95,
    ratingCount: 5,
    description: "I specialize in designing eye-catching logos, brochures, and digital assets tailored to your business needs.",
    startingPrice: "Rp 550.000"
  },
  {
    id: 2,
    imageSrc: "src/assets/Graphic Design/image2.jpeg",
    imageAlt: "",
    name: " Ava Johnson",
    role: "as Graphic Desaign",
    profileImageSrc: "/assets/testimoni/customer-1.jpg",
    rating: 4,
    ratingCount: 5,
    description: "I craft modern and professional graphic designs, from branding materials to social media visuals.",
    startingPrice: "Rp 450.000"
  },
  {
    id: 3,
    imageSrc: "src/assets/Graphic Design/image6.png",
    imageAlt: "",
    name: "Noah Robert",
    role: "as Graphic Desaign",
    profileImageSrc: "/assets/testimoni/customer-2.jpg",
    rating: 5,
    ratingCount: 5,
    description: "I deliver creative and impactful graphic solutions, focusing on functionality to leave a lasting impression.",
    startingPrice: "Rp 600.000"
  },
  {
    id: 4,
    imageSrc: "src/assets/Graphic Design/image9.jpg",
    imageAlt: "",
    name: "Torres Paye",
    role: "as Graphic Desaign",
    profileImageSrc: "/assets/testimoni/customer-4.jpg",
    rating: 4,
    ratingCount: 5,
    description: " I design unique, custom graphics that bring your ideas to life, ensuring your brand stands out in any medium.",
    startingPrice: "Rp 400.000"
  },
];

  
  const WebDevelopmentSection = () => {   
  const cards = [];
  for (let i = 0; i < workerData.length; i++) {
    const worker = workerData[i];
    cards.push(
        <div 
          key={worker.id} 
          className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4">  
          <img 
            src={worker.imageSrc} 
            alt={worker.imageAlt || worker.name} 
            className="w-full h-40 object-cover rounded-t-lg" 
          />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-gray-800">{worker.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{worker.description}</p>
            <p className="text-primary font-bold mt-3">{worker.price || worker.startingPrice}</p>
            <p className="text-yellow-500 mt-2">
              {"⭐".repeat(Math.round(worker.rating))}{" "}
              <span className="text-gray-600">({worker.rating})</span>
            </p>
          </div>
        </div>   
    );
  }
 

  return (
    <div className="grid grid-cols-4 gap-x-10 p-10">
      {cards}
    </div>
  );
};


export default WebDevelopmentSection;
