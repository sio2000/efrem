import { motion } from 'framer-motion';
import { 
  ChartLine,
  Users, 
  Warning, 
  Trophy
} from '@phosphor-icons/react';

const CoachDashboardDemo = () => {
  const stats = [
    { icon: <Users size={24} />, label: 'Συνολικοί Αθλητές', value: '24' },
    { icon: <ChartLine size={24} />, label: 'Μέση Απόδοση', value: '87%' },
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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gradient-to-br from-purple-200 to-blue-100 mb-10 overflow-hidden rounded-b-3xl shadow-2xl glass-effect border-4 border-transparent">
          <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="coach dashboard hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text drop-shadow mb-4">Coach Dashboard</h1>
            <p className="text-lg md:text-2xl text-gray-800 font-medium drop-shadow">Όλα τα εργαλεία του προπονητή σε ένα σημείο!</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 glass-effect rounded-2xl shadow-2xl p-8 mb-8 border-2 border-transparent hover:border-blue-400 transition-all duration-300"
        >
          <h1 className="text-3xl font-bold gradient-text mb-6 drop-shadow">Coach Dashboard</h1>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.07, rotate: -2 }}
                whileTap={{ scale: 0.97, rotate: 2 }}
                className="bg-gradient-to-br from-blue-100/80 to-purple-100/80 rounded-xl p-6 flex flex-col items-center text-center shadow-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300"
              >
                <div className="text-blue-600 mb-2 animate-bounce-slow">{stat.icon}</div>
                <p className="text-sm text-gray-600 font-medium mb-1">{stat.label}</p>
                <p className="text-2xl font-bold gradient-text drop-shadow">{stat.value}</p>
              </motion.div>
            ))}
          </div>
          {/* Athletes List */}
          <div className="bg-white/90 glass-effect rounded-xl border-2 border-transparent hover:border-blue-400 overflow-hidden shadow-xl transition-all duration-300">
            <div className="p-4 border-b border-blue-100/40 bg-gradient-to-r from-blue-50/60 to-purple-50/60">
              <h2 className="text-xl font-semibold gradient-text drop-shadow">Λίστα Αθλητών</h2>
            </div>
            <div className="divide-y divide-blue-100/40">
              {athletes.map((athlete, index) => (
                <motion.div
                  key={index}
                  whileHover={{ backgroundColor: '#f8fafc', scale: 1.01 }}
                  className="p-4 flex items-center justify-between transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow">
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
                          } animate-pulse`}
                          style={{ width: `${athlete.score}%` }}
                        />
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        {athlete.score}%
                      </span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium shadow-md ${
                        athlete.status === 'Optimal'
                          ? 'bg-green-100 text-green-800'
                          : athlete.status === 'Warning'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      } animate-bounce-slow`}
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