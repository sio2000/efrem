import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartLineUp, 
  Users, 
  Warning, 
  Trophy, 
  Heartbeat,
  Calendar
} from '@phosphor-icons/react';

const CoachDashboardDemo = () => {
  const stats = [
    { icon: <Users size={24} />, label: 'Συνολικοί Αθλητές', value: '24' },
    { icon: <ChartLineUp size={24} />, label: 'Μέση Απόδοση', value: '87%' },
    { icon: <Warning size={24} />, label: 'Ειδοποιήσεις', value: '3' },
    { icon: <Trophy size={24} />, label: 'Επιτυχίες', value: '156' },
  ];

  const athletes = [
    { name: 'Γιώργος Παπαδόπουλος', status: 'Optimal', score: 92 },
    { name: 'Μαρία Κωνσταντινίδου', status: 'Warning', score: 78 },
    { name: 'Νίκος Αλεξίου', status: 'Optimal', score: 95 },
    { name: 'Ελένη Δημητρίου', status: 'Risk', score: 65 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gradient-to-br from-purple-200 to-blue-100 mb-10 overflow-hidden rounded-b-3xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="coach dashboard hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text drop-shadow mb-4">Coach Dashboard</h1>
            <p className="text-lg md:text-2xl text-gray-800 font-medium drop-shadow">Όλα τα εργαλεία του προπονητή σε ένα σημείο!</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Coach Dashboard</h1>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-blue-50 rounded-xl p-4 flex items-center space-x-4"
              >
                <div className="text-blue-600">{stat.icon}</div>
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Athletes List */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Λίστα Αθλητών</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {athletes.map((athlete, index) => (
                <motion.div
                  key={index}
                  whileHover={{ backgroundColor: '#f8fafc' }}
                  className="p-4 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {athlete.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{athlete.name}</p>
                      <p className="text-sm text-gray-500">ID: {1000 + index}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            athlete.score >= 90
                              ? 'bg-green-500'
                              : athlete.score >= 75
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${athlete.score}%` }}
                        />
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        {athlete.score}%
                      </span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        athlete.status === 'Optimal'
                          ? 'bg-green-100 text-green-800'
                          : athlete.status === 'Warning'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {athlete.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoachDashboardDemo; 