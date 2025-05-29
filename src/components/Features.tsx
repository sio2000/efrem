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
    <div className="relative w-full max-w-2xl mx-auto mb-10 flex items-center justify-center overflow-hidden rounded-3xl shadow-lg">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="features hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="relative z-10 text-center py-12 w-full">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text drop-shadow mb-4">Χαρακτηριστικά</h1>
        <p className="text-lg md:text-2xl text-gray-800 font-medium drop-shadow">Όλες οι δυνατότητες της πλατφόρμας μας σε ένα σημείο!</p>
      </div>
    </div>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center">
          <img src={feature.image} alt={feature.title} className="w-28 h-28 object-cover rounded-xl mb-4 shadow-md" />
          <h2 className="text-xl font-bold gradient-text mb-2">{feature.title}</h2>
          <p className="text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features; 