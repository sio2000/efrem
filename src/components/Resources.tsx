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
      category: 'Τεχνικά'
    },
    {
      title: 'Προγράμματα Προπόνησης',
      description: 'Προτεινόμενα προγράμματα για διαφορετικά επίπεδα αθλητών.',
      icon: <Heartbeat size={32} />,
      category: 'Προπόνηση'
    },
    {
      title: 'Ερωτηματολόγια Ευεξίας',
      description: 'Πρότυπα ερωτηματολόγια για την παρακολούθηση της φυσικής κατάστασης.',
      icon: <Users size={32} />,
      category: 'Ευεξία'
    },
    {
      title: 'Οδηγός Χρήσης',
      description: 'Πλήρης τεκμηρίωση για τη χρήση της πλατφόρμας.',
      icon: <BookOpen size={32} />,
      category: 'Εγχειρίδια'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <ResourcesHero />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Πόροι & Εγχειρίδια</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Βρείτε όλους τους απαραίτητους πόρους για τη βέλτιστη χρήση της πλατφόρμας
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {resource.icon}
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 mb-3">
                  {resource.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <Download size={20} />
                  <span>Κατέβασμα PDF</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white"
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
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
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