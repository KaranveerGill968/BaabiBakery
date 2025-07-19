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
    <section className="py-12 px-6 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <div className="bg-pink-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 object-cover cursor-pointer"
              onClick={() => setSelectedImage(product.image)}
            />
            <div className="p-4">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="product-price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative">
            <img src={selectedImage} alt="Expanded" className="max-w-full max-h-[90vh] rounded shadow-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProducts;