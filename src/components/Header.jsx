import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-pink-100 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-pink-600">Baabi Bakery</h1>
      <nav className="flex space-x-4">
        <Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-pink-600">About</Link>
      </nav>
    </header>
  );
}

export default Header;