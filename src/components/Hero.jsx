import backgroundImage from '../assets/images/header-bg.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Header-style nav on top of hero */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-black/50 z-50">
  <h1 className="text-4xl font-extrabold tracking-wide text-white ml-4">Baabi Bakery</h1>
  <nav className="flex space-x-8 text-base font-medium mr-4">
    <Link to="/" className="text-white hover:text-pink-300 transition">Home</Link>
    <Link to="/about" className="text-white hover:text-pink-300 transition">About</Link>
  </nav>
</div>

      {/* Center hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Delicious Treats, Made with Love</h2>
        <p className="text-base md:text-lg max-w-xl text-white/90">
          Freshly baked cakes and cookies delivered across Victoria.
        </p>
        <a
          href="#products"
          className="mt-6 inline-block bg-pink-600 px-6 py-3 rounded-md font-semibold text-white hover:bg-pink-500 transition"
        >
          Browse Menu
        </a>
      </div>
    </section>
  );
}

export default Hero;