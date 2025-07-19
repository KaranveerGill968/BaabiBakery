import Footer from '../components/Footer';
import Hero from '../components/Hero'; // Header is included in Hero
import FeaturedProducts from '../components/FeaturedProducts';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        {/* Add ProductGrid, DeliveryInfo, Reviews later */}
      </main>
      <Footer />
    </div>
  );
}

export default Home;