import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const navLinks = [
  { to: '/resources', label: 'Resources' },
  { to: '/athlete', label: 'Athletes' },
  { to: '/coach-dashboard', label: 'Coach Dashboard' },
  { to: '/athlete-dashboard', label: 'Athlete Dashboard' },
  { to: '/faq', label: 'FAQ' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-blue-100/40 ${
        isScrolled ? 'shadow-2xl py-2' : 'bg-transparent py-4'
      }`}
      style={{ boxShadow: isScrolled ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' : undefined }}
    >
      <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Logo" className="h-16 w-16 object-contain mr-2 drop-shadow-lg" />
          <span className="text-2xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm group-hover:text-purple-700 transition-colors duration-300">What the Coach Sees</span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-gray-700 font-medium transition-colors duration-300 py-1 px-2
                ${location.pathname === link.to ? 'text-blue-700' : 'hover:text-blue-600'}`}
            >
              {link.label}
              {/* Animated underline */}
              <span className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300
                ${location.pathname === link.to ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
          <div className="flex space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300 shadow-sm focus:ring-2 focus:ring-blue-200"
            >
              Athlete Login
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg focus:ring-2 focus:ring-blue-400"
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
        <div className="md:hidden bg-white/95 shadow-2xl rounded-b-2xl animate-fade-in-down">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-gray-700 py-2 font-medium rounded-lg transition-colors duration-300 ${location.pathname === link.to ? 'bg-blue-100 text-blue-700' : 'hover:text-blue-600 hover:bg-blue-50'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-2">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300 shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Athlete Login
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg"
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