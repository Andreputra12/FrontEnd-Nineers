import React from 'react';

const workerData= [
  {
    id: 1,
    imageSrc: "src/assets/andro img/andro 2.png",
    imageAlt: "",
    name: "Ethan Brown",
    role: "as Android Development",
    profileImageSrc: "/assets/testimoni/ben.jpg",
    rating: 4.95,
    ratingCount: 5,
    description: "I build feature-rich Android apps, focusing on scalability, smooth performance, and modern design.",
    startingPrice: "Rp 650.000"
  },
  {
    id: 2,
    imageSrc: "src/assets/Android Development/image2.png",
    imageAlt: "",
    name: " Mia Hernandez",
    role: "as Android Development",
    profileImageSrc: "/assets/testimoni/customer-1.jpg",
    rating: 4,
    ratingCount: 5,
    description: "I craft intuitive Android applications with a strong emphasis on user experience and responsive design.",
    startingPrice: "Rp 550.000"
  },
  {
    id: 3,
    imageSrc: "src/assets/Android Development/image6.jpg",
    imageAlt: "",
    name: "Ryan Patel",
    role: "as Android Development",
    profileImageSrc: "/assets/testimoni/customer-2.jpg",
    rating: 5,
    ratingCount: 5,
    description: "I deliver robust Android solutions with ensuring compatibility across a wide range of devices.",
    startingPrice: "Rp 850.000"
  },
  {
    id: 4,
    imageSrc: "src/assets/Android Development/image9.png",
    imageAlt: "",
    name: "Jason Taylor",
    role: "as Android Development",
    profileImageSrc: "/assets/testimoni/customer-4.jpg",
    rating: 4,
    ratingCount: 5,
    description: "I design and develop custom Android apps with seamless functionality and engaging user interfaces.",
    startingPrice: "Rp 530.000"
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
