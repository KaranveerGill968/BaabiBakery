import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <Header />
      <main className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">About Baabi Bakery</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Welcome to Baabi Bakery — a cozy, home-run bakery specializing in handcrafted cookies and cakes made with love in Victoria.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default About;