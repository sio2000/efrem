const FAQHero = () => (
  <div className="relative w-full h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 mb-10 overflow-hidden rounded-b-3xl shadow-lg">
    <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="faq hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
    <div className="relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold gradient-text drop-shadow mb-4">Frequently Asked Questions</h1>
      <p className="text-lg md:text-2xl text-gray-800 font-medium drop-shadow">All the answers you need for our platform.</p>
    </div>
  </div>
);

export default FAQHero; 