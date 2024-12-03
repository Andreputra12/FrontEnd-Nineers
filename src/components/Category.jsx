import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Web Development',
    href: 'detailweb.html',
    bgColor: '#0F3DDE',
    imageSrc: 'src/assets/Web Development/image1.png',
    altText: 'Web Development',
  },
  {
    id: 2,
    title: 'Software Development',
    href: 'detailsoftware.html',
    bgColor: '#3CA4B4',
    imageSrc: 'src/assets/Software Developments/image2.jpg',
    altText: 'Software Development',
  },
  {
    id: 3,
    title: 'Android Development',
    href: 'detailandroid.html',
    bgColor: '#1E3652',
    imageSrc: 'src/assets/Android Development/image2.png',
    altText: 'Android Development',
  },
  {
    id: 4,
    title: 'Graphic Design',
    href: 'detailgraphic.html',
    bgColor: '#664B31',
    imageSrc: 'src/assets/Graphic Design/image1.jpg',
    altText: 'Graphic Design',
  },
];

const Category = () => {
  return (
    <section className="mb-32" id="category">
      <h2 className="px-20 font-bold text-2xl pt-5">Category</h2>
      <div className="grid grid-cols-4 gap-x-10 py-5 px-20">
        {categories.map((category) => (
          <a
            key={category.id}
            href={category.href}
            className="rounded-md hover:scale-[0.9]"
            style={{ backgroundColor: category.bgColor }}
          >
            <h3 className="text-white text-center text-xl font-bold pt-5">
              {category.title}
            </h3>
            <img
              src={category.imageSrc}
              alt={category.altText}
              className="p-5 rounded-[25px]"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Category;
