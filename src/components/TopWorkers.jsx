import React from "react";

const TopWorkers = () => {
  const workers = [
    {
      id: 1,
      name: "Nikita Johan",
      role: "Software Development",
      image: "src/assets/Graphic Design/image2.jpeg",
      profile: "src/assets/testimoni/customer-1.jpg",
      description: "I will user-friendly and build custom software solutions that are robust, efficient, and scalable.",
      rating: 4,
      startingPrice: "Rp 500.000",
    },
    {
      id: 2,
      name: "Bryn Bruce",
      role: "Web Development",
      image: "src/assets/Software Developments/image2.jpg",
      profile: "src/assets/testimoni/customer-2.jpg",
      description: "I will design and develop responsive websites using like React.js, Next.js, and Node.js.",
      rating: 5,
      startingPrice: "Rp 750.000",
    },
    {
      id: 3,
      name: "Bill Adam",
      role: "Android Development",
      image: "src/assets/Web Development/image2.webp",
      profile: "src/assets/testimoni/ben.jpg",
      description: "I will develop Android applications that are user-friendly and feature-rich.",
      rating: 3,
      startingPrice: "Rp 470.000",
    },
    {
      id: 4,
      name: "Laura John",
      role: "Graphic Desaign",
      image: "src/assets/Web Development/image2.webp",
      profile: "src/assets/photo2.jpg",
      description: " I will create stunning and impactful graphic designs that elevate your brand identity.",
      rating: 3,
      startingPrice: "Rp 400.000",
    },
  ];

  return (
    <section className="mb-36">
      <p className="font-bold text-3xl px-20 mb-10">Top Workers</p>
      <div className="grid grid-cols-4 gap-x-10 px-20">
        {workers.map((worker) => (
          <div
            key={worker.id}
            id={`worker-${worker.id}`}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div>
              <img
                className="rounded-t-lg"
                src={worker.image}
                alt={`${worker.name}'s work`}
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-x-2 mb-3">
                <img
                  src={worker.profile}
                  alt={worker.name}
                  width="50px"
                  height="50px"
                  className="rounded-full"
                />
                <div>
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {worker.name}
                  </h5>
                  <p>as {worker.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {Array.from({ length: worker.rating }).map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {worker.description}
              </p>
            </div>
            <div className="border-t-2">
              <p className="pl-5 pt-2">STARTING AT</p>
              <p className="font-bold pl-5">{worker.startingPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopWorkers;
