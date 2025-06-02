import { Facebook, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-blue-800/90 text-white overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-blob z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000 z-0" />
      <div className="container mx-auto max-w-6xl px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 drop-shadow">SportSync</h3>
            <p className="text-gray-300 mb-4">Empowering coaches and athletes with data-driven performance insights.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 animate-pulse" title="Facebook">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 animate-pulse animation-delay-2000" title="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="#" className="text-pink-200 hover:text-white transition-colors duration-300 animate-pulse animation-delay-4000" title="Instagram">
                <Instagram size={22} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 drop-shadow">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Coach Portal</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Athlete Portal</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Success Stories</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 drop-shadow">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Blog</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 drop-shadow">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-blue-200">
                <Mail size={16} className="mr-2 animate-pulse" />
                <a href="mailto:info@sportsync.com" className="hover:text-white transition-colors duration-300">info@sportsync.com</a>
              </li>
              <li className="flex items-center text-blue-200">
                <Phone size={16} className="mr-2 animate-pulse animation-delay-2000" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} SportSync. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;