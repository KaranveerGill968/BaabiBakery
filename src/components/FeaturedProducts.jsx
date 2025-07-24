import React, { useState } from 'react';
import cake1 from '../assets/images/cake1.jpg';
import cake2 from '../assets/images/cake2.jpg';
import cake3 from '../assets/images/cake3.jpg';
import cake4 from '../assets/images/cake4.jpg';
import cake5 from '../assets/images/cake5.png';

const products = [
  {
    id: 101,
    name: 'Carrot Cake',
    description: 'A low-fat cream cheese cake with nuts and carrots.',
    price: '$24.99',
    image: cake1,
  },
  {
    id: 102,
    name: 'Vanilla Cake',
    description: 'Filled with whipped white chocolate ganache and covered with homemade vanilla buttercream.',
    price: '$26.99',
    image: cake2,
  },
  {
    id: 103,
    name: 'Chocolate Fudge Cake',
    description: 'Rich chocolate cake with decadent fudge layers.',
    price: '$27.99',
    image: cake3,
  },
  {
    id: 104,
    name: 'Strawberry Shortcake',
    description: 'Light vanilla cake layered with fresh strawberries and whipped cream.',
    price: '$25.99',
    image: cake4,
  },
  {
    id: 105,
    name: 'Dilawar Cake',
    description: 'Baabi knows.',
    price: '$23.99',
    image: cake5,
  },
];

const FeaturedProducts = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className="pt-6 pb-16 px-8 bg-pink-50 text-pink-900">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-wide">Featured Orders</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedImage(product.image)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">{product.description}</p>
              <span className="inline-block bg-pink-200 text-pink-800 font-bold px-3 py-1 rounded-full text-xs sm:text-sm">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Expanded"
              className="rounded-lg shadow-lg max-w-full max-h-[90vh]"
              loading="lazy"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-pink-100 text-pink-900 px-3 py-1 rounded-full shadow hover:bg-pink-300 transition"
              aria-label="Close image"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;