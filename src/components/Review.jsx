import React from "react";

const Review = () => {
  const reviews = [
    {
      id: 1,
      image: "src/assets/testimoni/ben.jpg",
      name: "Andre Putra",
      quote: "Aman dan terpercaya",
    },
    {
      id: 2,
      image: "src/assets/testimoni/customer-1.jpg",
      name: "Simon Markee",
      quote: "Proses sangat cepat",
    },
    {
      id: 3,
      image: "src/assets/testimoni/customer-2.jpg",
      name: "Maheer Naufal",
      quote: "Pelayanan Ramah Dan Cepat",
    },
    {
      id: 4,
      image: "src/assets/testimoni/customer-3.jpg",
      name: "Rifqi Hidayat",
      quote: "Harga Worth it dan terjangkau",
    },
    {
      id: 5,
      image: "src/assets/testimoni/customer-4.jpg",
      name: "Gilang Ramadhan",
      quote: "Hasil Memuaskan",
    },
    {
      id: 6,
      image: "src/assets/testimoni/customer-5.jpg",
      name: "Darren Dolken",
      quote: "Kualitas Terbaik dan akan langganan",
    },
    {
      id: 7,
      image: "src/assets/testimoni/customer-6.jpg",
      name: "Jonas Sihaan",
      quote: "Tidak Mengecewakan Terjamin",
    },
    {
      id: 8,
      image: "src/assets/testimoni/dave.jpg",
      name: "Karen Winata",
      quote: "Sudah langganan dan hasil terbaik",
    },
  ];

  return (
    <section className="bg-[#DFE8D3] mx-36 rounded-md mb-20src">
      <div className="grid grid-cols-4 gap-y-20 py-20 px-10">
        {reviews.map((review) => (
          <div key={review.id}>
            <img
              src={review.image}
              alt={review.name}
              width="50px"
              height="50px"
              className="rounded-full"
            />
            <h4>{review.name}</h4>
            <q>{review.quote}</q>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
