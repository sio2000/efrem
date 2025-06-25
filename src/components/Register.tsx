const Register = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center py-10">
    <div className="relative w-full max-w-2xl mb-10 flex items-center justify-center overflow-hidden rounded-3xl shadow-lg">
      <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="register hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="relative z-10 text-center py-12 w-full">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text drop-shadow mb-4">Register</h1>
        <p className="text-lg md:text-2xl text-gray-800 font-medium drop-shadow">Create your account and get started right away!</p>
      </div>
    </div>
    <div className="bg-white/80 p-10 rounded-2xl shadow-xl max-w-md w-full">
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="example@email.com" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="********" />
        </div>
        <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">Register</button>
      </form>
    </div>
  </div>
);

export default Register; 