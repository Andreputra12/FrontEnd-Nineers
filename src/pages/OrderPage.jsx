import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Data pekerja yang tersedia
const workerData = [
  {
    id: 1,
    name: "John Smith",
    imageSrc: "src/assets/Web Development/image7.webp",
    imageAlt: "Web Development",
    description: "I will build custom e-commerce websites with integrated payment gateways and intuitive designs.",
    price: "Rp 500.000",
    rating: 4.95,
  },
  {
    id: 2,
    name: "Emily Johnson",
    imageSrc: "src/assets/Graphic Design/image2.jpeg",
    imageAlt: "Graphic Design",
    description: "I will design and develop modern, scalable web applications using the latest technologies.",
    price: "Rp 420.000",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Bryn Bruce",
    imageSrc: "src/assets/Software Developments/image2.jpg",
    imageAlt: "Software Development",
    description: "I will design and develop responsive websites using React.js, Next.js, and Node.js.",
    price: "Rp 750.000",
    rating: 5,
  },
  {
    id: 4,
    name: "Ryan Lewis",
    imageSrc: "src/assets/Web Development/image2.webp",
    imageAlt: "Web Development",
    description: "I will fix bugs and provide maintenance services to keep your website running smoothly.",
    price: "Rp 470.000",
    rating: 4,
  },
  // Data Android Development dimulai dari id 5
  {
    id: 5,
    name: "Ethan Brown",
    imageSrc: "src/assets/andro img/andro 2.png",
    imageAlt: "Android Development",
    description: "I build feature-rich Android apps, focusing on scalability, smooth performance, and modern design.",
    price: "Rp 650.000",
    rating: 4.95,
  },
  {
    id: 6,
    name: "Mia Hernandez",
    imageSrc: "src/assets/Android Development/image2.png",
    imageAlt: "Android Development",
    description: "I craft intuitive Android applications with a strong emphasis on user experience and responsive design.",
    price: "Rp 550.000",
    rating: 4,
  },
  {
    id: 7,
    name: "Ryan Patel",
    imageSrc: "src/assets/Android Development/image6.jpg",
    imageAlt: "Android Development",
    description: "I deliver robust Android solutions with ensuring compatibility across a wide range of devices.",
    price: "Rp 850.000",
    rating: 5,
  },
  {
    id: 8,
    name: "Jason Taylor",
    imageSrc: "src/assets/Android Development/image9.png",
    imageAlt: "Android Development",
    description: "I design and develop custom Android apps with seamless functionality and engaging user interfaces.",
    price: "Rp 530.000",
    rating: 4,
  },
  // Data Graphic Design dimulai dari id 9
  {
    id: 9,
    name: "Liam Mitchell",
    imageSrc: "src/assets/Graphic Design/image5.jpg",
    imageAlt: "Graphic Design",
    description: "I specialize in designing eye-catching logos, brochures, and digital assets tailored to your business needs.",
    price: "Rp 550.000",
    rating: 4.95,
  },
  {
    id: 10,
    name: "Ava Johnson",
    imageSrc: "src/assets/Graphic Design/image2.jpeg",
    imageAlt: "Graphic Design",
    description: "I craft modern and professional graphic designs, from branding materials to social media visuals.",
    price: "Rp 450.000",
    rating: 4,
  },
  {
    id: 11,
    name: "Noah Robert",
    imageSrc: "src/assets/Graphic Design/image6.png",
    imageAlt: "Graphic Design",
    description: "I deliver creative and impactful graphic solutions, focusing on functionality to leave a lasting impression.",
    price: "Rp 600.000",
    rating: 5,
  },
  {
    id: 12,
    name: "Torres Paye",
    imageSrc: "src/assets/Graphic Design/image9.jpg",
    imageAlt: "Graphic Design",
    description: "I design unique, custom graphics that bring your ideas to life, ensuring your brand stands out in any medium.",
    price: "Rp 400.000",
    rating: 4,
  },
  // New Software Development Workers
  {
    id: 13,
    imageSrc: "src/assets/software dev img/gambar web 5.jpeg",
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
    imageSrc: "src/assets/Software Developments/image2.jpg",
    imageAlt: "",
    name: "Kate Nile",
    role: "Software Development",
    profileImageSrc: "src/assets/testimoni/customer-1.jpg",
    rating: 4,
    ratingCount: 5,
    description: "I specialize in crafting mobile apps with seamless functionality, and cross-platform compatibility.",
    startingPrice: "Rp 500.000",
  },
  {
    id: 15,
    imageSrc: "src/assets/Software Developments/image4.webp",
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
    imageSrc: "src/assets/Software Developments/image5.webp",
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

const OrderPage = () => {
  const { workerId } = useParams(); // Mengambil ID pekerja dari URL
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    // Menemukan data pekerja berdasarkan ID yang dipilih
    const selectedWorker = workerData.find(
      (worker) => worker.id === parseInt(workerId)
    );
    setWorker(selectedWorker);
  }, [workerId]); // Menjalankan efek setiap kali workerId berubah

  if (!worker) {
    return <p>Worker not found</p>; // Jika pekerja tidak ditemukan
  }
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{worker.name}</h1>
        <div className="mt-2 flex space-x-4 text-sm text-gray-500">
          {/* Rating Section */}
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${index < Math.floor(worker.rating) ? 'text-yellow-300' : 'text-gray-300'} me-1`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
            ))}
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {worker.rating}
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
          <img
            src={workerData.imageSrc}
            alt={worker.imageAlt}
            className="w-full h-auto rounded-lg mb-6"
          />

          <h2 className="text-lg font-semibold text-gray-800 mb-4">Description :</h2>
          <p className="text-sm text-gray-600 mb-4">{worker.description}</p>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Promo</h3>
          <div className="text-gray-800 text-3xl font-bold mb-4">{worker.price}</div>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>✔ 4 Days Delivery</li>
            <li>✔ 1 Revision</li>
            <li>✔ 8 Captions</li>
            <li>✔ 5 Screenshots</li>
            <li>✔ Screen Recording</li>
            <li>✔ Add Logo</li>
            <li>✔ Dynamic Transitions</li>
            <li>✔ 30 seconds running time</li>
          </ul>
          <button
            className="bg-green-500 text-black font-bold py-2 px-4 border shadow rounded-lg w-full hover:bg-white hover:text-green-500"
          >
            Contact Worker By Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
