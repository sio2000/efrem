import { motion } from 'framer-motion';

const features = [
  {
    title: 'Ανάλυση Απόδοσης',
    description: 'Παρακολούθηση και ανάλυση των μετρήσεων απόδοσης με γραφήματα και στατιστικά.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Διαχείριση Ομάδας',
    description: 'Διαχείριση αθλητών, δημιουργία ομάδων και παρακολούθηση προόδου.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Έξυπνες Αναλύσεις',
    description: 'AI-powered αναλύσεις για βέλτιστες αποφάσεις και εξατομικευμένες προτάσεις.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Features = () => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-purple-100 py-10">
    <div className="relative w-full max-w-2xl mx-auto mb-10 flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl glass-effect border-4 border-transparent hover:border-blue-400 transition-all duration-500">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="features hero" className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110" />
      <div className="relative z-10 text-center py-12 w-full">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text drop-shadow mb-4">Features</h1>
        <p className="text-lg md:text-2xl text-gray-800 font-medium drop-shadow">All the features of our platform in one place!</p>
      </div>
    </div>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 + idx * 0.15, type: 'spring', stiffness: 80 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.97, rotate: 2 }}
          className="bg-white/70 glass-effect rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border-2 border-transparent hover:border-blue-400 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <img src={feature.image} alt={feature.title} className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center mb-4 shadow-lg animate-bounce-slow group-hover:animate-bounce">
              <img src={feature.image} alt={feature.title} className="w-16 h-16 object-cover rounded-lg shadow-md" />
            </div>
            <h2 className="text-xl font-bold gradient-text mb-2 drop-shadow-sm">{feature.title}</h2>
            <p className="text-gray-700 font-medium drop-shadow-sm">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Features; 