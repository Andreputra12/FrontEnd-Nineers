import React from 'react'

const workerData = [
    {
      id: 1,
      name: "John Smith",
      imageSrc: "/assets/Web Development/image7.webp",
      imageAlt: "Web Development",
      description: "I will build custom e-commerce websites with integrated payment gateways and intuitive designs.",
      price: "Rp 500.000",
      rating: 4.95,
    },
    {
      id: 2,
      name: "Emily Johnson",
      imageSrc: "/assets/Graphic Design/image2.jpeg",
      imageAlt: "Graphic Design",
      description: "I will design and develop modern, scalable web applications using the latest technologies.",
      price: "Rp 420.000",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Bryn Bruce",
      imageSrc: "/assets/Software Developments/image2.jpg",
      imageAlt: "Software Development",
      description: "I will design and develop responsive websites using React.js, Next.js, and Node.js.",
      price: "Rp 750.000",
      rating: 5,
    },
    {
      id: 4,
      name: "Ryan Lewis",
      imageSrc: "/assets/Web Development/image2.webp",
      imageAlt: "Web Development",
      description: "I will fix bugs and provide maintenance services to keep your website running smoothly.",
      price: "Rp 470.000",
      rating: 4,
    },
    // Data Android Development dimulai dari id 5
    {
      id: 5,
      name: "Ethan Brown",
      imageSrc: "/assets/andro img/andro 2.png",
      imageAlt: "Android Development",
      description: "I build feature-rich Android apps, focusing on scalability, smooth performance, and modern design.",
      price: "Rp 650.000",
      rating: 4.95,
    },
    {
      id: 6,
      name: "Mia Hernandez",
      imageSrc: "/assets/Android Development/image2.png",
      imageAlt: "Android Development",
      description: "I craft intuitive Android applications with a strong emphasis on user experience and responsive design.",
      price: "Rp 550.000",
      rating: 4,
    },
    {
      id: 7,
      name: "Ryan Patel",
      imageSrc: "/assets/Android Development/image6.jpg",
      imageAlt: "Android Development",
      description: "I deliver robust Android solutions with ensuring compatibility across a wide range of devices.",
      price: "Rp 850.000",
      rating: 5,
    },
    {
      id: 8,
      name: "Jason Taylor",
      imageSrc: "/assets/Android Development/image9.png",
      imageAlt: "Android Development",
      description: "I design and develop custom Android apps with seamless functionality and engaging user interfaces.",
      price: "Rp 530.000",
      rating: 4,
    },
    // Data Graphic Design dimulai dari id 9
    {
      id: 9,
      name: "Liam Mitchell",
      imageSrc: "/assets/Graphic Design/image5.jpg",
      imageAlt: "Graphic Design",
      description: "I specialize in designing eye-catching logos, brochures, and digital assets tailored to your business needs.",
      price: "Rp 550.000",
      rating: 4.95,
    },
    {
      id: 10,
      name: "Ava Johnson",
      imageSrc: "/assets/Graphic Design/image2.jpeg",
      imageAlt: "Graphic Design",
      description: "I craft modern and professional graphic designs, from branding materials to social media visuals.",
      price: "Rp 450.000",
      rating: 4,
    },
    {
      id: 11,
      name: "Noah Robert",
      imageSrc: "/assets/Graphic Design/image6.png",
      imageAlt: "Graphic Design",
      description: "I deliver creative and impactful graphic solutions, focusing on functionality to leave a lasting impression.",
      price: "Rp 600.000",
      rating: 5,
    },
    {
      id: 12,
      name: "Torres Paye",
      imageSrc: "/assets/Graphic Design/image9.jpg",
      imageAlt: "Graphic Design",
      description: "I design unique, custom graphics that bring your ideas to life, ensuring your brand stands out in any medium.",
      price: "Rp 400.000",
      rating: 4,
    },
    // New Software Development Workers
    {
      id: 13,
      imageSrc: "/assets/software dev img/gambar web 5.jpeg",
      imageAlt: "",
      name: "Alex Carter",
      role: "Software Development",
      profileImageSrc: "/assets/testimoni/ben.jpg",
      rating: 4.95,
      ratingCount: 5,
      description: "I develop robust web applications tailored to your needs, focusing on scalability and intuitive user experiences.",
      startingPrice: "Rp 600.000",
    },
    {
      id: 14,
      imageSrc: "/assets/Software Developments/image2.jpg",
      imageAlt: "",
      name: "Kate Nile",
      role: "Software Development",
      profileImageSrc: "/assets/testimoni/customer-1.jpg",
      rating: 4,
      ratingCount: 5,
      description: "I specialize in crafting mobile apps with seamless functionality, and cross-platform compatibility.",
      startingPrice: "Rp 500.000",
    },
    {
      id: 15,
      imageSrc: "/assets/Software Developments/image4.webp",
      imageAlt: "",
      name: "Michael Davis",
      role: "Software Development",
      profileImageSrc: "/assets/testimoni/customer-2.jpg",
      rating: 5,
      ratingCount: 5,
      description: "I create custom software solutions for businesses, optimizing workflows and driving digital transformation.",
      startingPrice: "Rp 800.000",
    },
    {
      id: 16,
      imageSrc: "/assets/Software Developments/image5.webp",
      imageAlt: "",
      name: "David Lee",
      role: "Software Development",
      profileImageSrc: "/assets/testimoni/customer-4.jpg",
      rating: 4,
      ratingCount: 5,
      description: "I build efficient cloud-based applications, leveraging the latest technologies for scalability.",
      startingPrice: "Rp 480.000",
    },
  ];
  

  const Card = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {cards}
      </div>
    );
  };
  

export default Card



