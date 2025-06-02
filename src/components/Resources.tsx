import { motion } from 'framer-motion';
import {
  Download,
  BookOpen,
  ChartLineUp,
  Heartbeat,
  Users
} from '@phosphor-icons/react';
import ResourcesHero from './ResourcesHero';

const Resources = () => {
  const resources = [
    {
      title: 'Πρωτόκολλα Τεστ',
      description: 'Λεπτομερείς οδηγίες για CMJ, 5-10-5, και άλλα τεστ απόδοσης.',
      icon: <ChartLineUp size={32} />,
      category: 'Τεχνικά',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Προγράμματα Προπόνησης',
      description: 'Προτεινόμενα προγράμματα για διαφορετικά επίπεδα αθλητών.',
      icon: <Heartbeat size={32} />,
      category: 'Προπόνηση',
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Ερωτηματολόγια Ευεξίας',
      description: 'Πρότυπα ερωτηματολόγια για την παρακολούθηση της φυσικής κατάστασης.',
      icon: <Users size={32} />,
      category: 'Ευεξία',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Οδηγός Χρήσης',
      description: 'Πλήρης τεκμηρίωση για τη χρήση της πλατφόρμας.',
      icon: <BookOpen size={32} />,
      category: 'Εγχειρίδια',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-blue-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <ResourcesHero />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4 drop-shadow-lg">Πόροι & Εγχειρίδια</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Βρείτε όλους τους απαραίτητους πόρους για τη βέλτιστη χρήση της πλατφόρμας
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15, type: 'spring', stiffness: 120 }}
              className="bg-white/80 glass-effect rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border-2 border-transparent hover:border-blue-400 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <img src={resource.image} alt={resource.title} className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500" />
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center mb-4 rounded-xl shadow-lg animate-bounce-slow group-hover:animate-bounce">
                  {resource.icon}
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 mb-3">
                  {resource.category}
                </span>
                <h3 className="text-xl font-bold gradient-text mb-2 drop-shadow-sm">{resource.title}</h3>
                <p className="text-gray-700 font-medium drop-shadow-sm mb-4">{resource.description}</p>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold">
                  <Download size={20} />
                  <span>Κατέβασμα PDF</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text mb-8 drop-shadow-lg text-center">Εμπνευστικές Ιστορίες</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ομάδα Νέων',
                story: 'Μια ομάδα νέων αθλητών βελτίωσε την απόδοσή της κατά 30% μέσα σε 6 μήνες με τη χρήση της πλατφόρμας μας.',
                image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Προπονητής Μαρία',
                story: 'Η Μαρία κατάφερε να οργανώσει καλύτερα το πρόγραμμα της ομάδας της και να μειώσει τους τραυματισμούς.',
                image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Αθλητής Νίκος',
                story: 'Ο Νίκος έπιασε νέο προσωπικό ρεκόρ χάρη στην ανάλυση δεδομένων και τις AI προτάσεις.',
                image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.15, type: 'spring', stiffness: 120 }}
                className="bg-white/80 glass-effect rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border-2 border-transparent hover:border-blue-400 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 shadow-lg">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-bold gradient-text mb-2 drop-shadow-sm">{item.name}</h3>
                <p className="text-gray-700 font-medium drop-shadow-sm">{item.story}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Μείνετε Ενημερωμένοι</h2>
            <p className="text-blue-100 mb-6">
              Εγγραφείτε για να λαμβάνετε τα τελευταία νέα και ενημερώσεις για τη πλατφόρμα
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Διεύθυνση email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-md">
                Εγγραφή
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources; 