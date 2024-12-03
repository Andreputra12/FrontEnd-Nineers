import React from 'react';



const workerData= [
  {
    id: 1,
    imageSrc: "src/assets/Web Development/image7.webp",
    imageAlt: "",
    name: "John Smith",
    role: "as Web Development",
    profileImageSrc: "/assets/testimoni/ben.jpg",
    rating: 4.95,
    ratingCount: 5,
    description: "I will build custom e-commerce websites with integrated payment gateways and intuitive designs.",
    startingPrice: "Rp 500.000"
  },
  {
    id: 2,
    imageSrc: "src/assets/Graphic Design/image2.jpeg",
    imageAlt: "",
    name: "Emily Johnson",
    role: "as Web Development",
    profileImageSrc: "/assets/testimoni/customer-1.jpg",
    rating: 4,
    ratingCount: 5,
    description: "I will design and develop modern, scalable web applications using the latest technologies.",
    startingPrice: "Rp 420.000"
  },
  {
    id: 3,
    imageSrc: "src/assets/Software Developments/image2.jpg",
    imageAlt: "",
    name: "Bryn Bruce",
    role: "as Web Development",
    profileImageSrc: "/assets/testimoni/customer-2.jpg",
    rating: 5,
    ratingCount: 5,
    description: "I will design and develop responsive websites using like React.js, Next.js, and Node.js.",
    startingPrice: "Rp 750.000"
  },
  {
    id: 4,
    imageSrc: "src/assets/Web Development/image2.webp",
    imageAlt: "",
    name: "Ryan Lewis",
    role: "as Web Development",
    profileImageSrc: "/assets/testimoni/customer-4.jpg",
    rating: 4,
    ratingCount: 5,
    description: "I will fix bugs and provide maintenance services to keep your website running smoothly.",
    startingPrice: "Rp 470.000"
  },
  
];

  
  const WebDevelopmentSection = () => {   
  const cards = [];
  for (let i = 0; i < workerData.length; i++) {
    const worker = workerData[i];
    cards.push(
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4"> 
           
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
