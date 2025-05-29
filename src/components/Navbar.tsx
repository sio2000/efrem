import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Medal } from '@phosphor-icons/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 ${
        isScrolled ? 'shadow-2xl py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Medal className="h-9 w-9 text-blue-600 mr-2 drop-shadow-lg" weight="fill" />
          <span className="text-2xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm">What the Coach Sees</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/resources"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            Πόροι
          </Link>
          <Link
            to="/coach-dashboard"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            Coach Dashboard
          </Link>
          <Link
            to="/athlete-dashboard"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            Athlete Dashboard
          </Link>
          <Link
            to="/faq"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            FAQ
          </Link>
          <div className="flex space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              Athlete Login
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            >
              Coach Login
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link
              to="/resources"
              className="text-gray-700 py-2 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Πόροι
            </Link>
            <Link
              to="/coach-dashboard"
              className="text-gray-700 py-2 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Coach Dashboard
            </Link>
            <Link
              to="/athlete-dashboard"
              className="text-gray-700 py-2 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Athlete Dashboard
            </Link>
            <Link
              to="/faq"
              className="text-gray-700 py-2 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Athlete Login
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Coach Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;