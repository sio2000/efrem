import { motion } from 'framer-motion';
import {
  Heartbeat,
  Trophy,
  ChartLineUp,
  Calendar,
  ChatCircleText
} from '@phosphor-icons/react';

const AthleteDashboardDemo = () => {
  const performanceMetrics = [
    { label: 'Τρέξιμο', value: 85, icon: <ChartLineUp size={24} /> },
    { label: 'Πηδηματικότητα', value: 92, icon: <Trophy size={24} /> },
    { label: 'Αντοχή', value: 78, icon: <Heartbeat size={24} /> },
  ];

  const feedback = [
    {
      type: 'Coach',
      message: 'Μπράβο για την βελτίωση στην ταχύτητα! Συνέχισε έτσι.',
      date: '2024-03-15'
    },
    {
      type: 'System',
      message: 'Η ανάκτηση σου είναι βέλτιστη σήμερα.',
      date: '2024-03-14'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-blue-100 py-8 px-4">
      <div className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gradient-to-br from-emerald-200 to-blue-100 mb-10 overflow-hidden rounded-b-3xl shadow-2xl glass-effect border-4 border-transparent">
        <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="athlete dashboard hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text drop-shadow mb-4">Athlete Dashboard</h1>
          <p className="text-lg md:text-2xl text-gray-800 font-medium drop-shadow">Η προσωπική σου πρόοδος και στατιστικά, με μια ματιά!</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 glass-effect rounded-2xl shadow-2xl p-8 mb-8 border-2 border-transparent hover:border-blue-400 transition-all duration-300"
        >
          {/* Athlete Profile Header */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl text-blue-600 font-bold">ΓΠ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text drop-shadow">Γιώργος Παπαδόπουλος</h1>
              <p className="text-gray-600">ID: 1001</p>
            </div>
          </div>
          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.07, rotate: -2 }}
                whileTap={{ scale: 0.97, rotate: 2 }}
                className="bg-gradient-to-br from-blue-100/80 to-purple-100/80 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">{metric.label}</span>
                  <div className="text-blue-600 animate-bounce-slow">{metric.icon}</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full animate-pulse"
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
                <p className="text-right mt-2 text-sm font-bold gradient-text drop-shadow">{metric.value}%</p>
              </motion.div>
            ))}
          </div>
          {/* Recent Activity */}
          <div className="bg-white/90 glass-effect rounded-xl border-2 border-transparent hover:border-blue-400 overflow-hidden shadow-xl transition-all duration-300 mb-8">
            <div className="p-4 border-b border-blue-100/40 bg-gradient-to-r from-blue-50/60 to-purple-50/60">
              <h2 className="text-xl font-semibold gradient-text drop-shadow">Πρόσφατη Δραστηριότητα</h2>
            </div>
            <div className="divide-y divide-blue-100/40">
              {feedback.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ backgroundColor: '#f8fafc', scale: 1.01 }}
                  className="p-4 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600 animate-bounce-slow">
                      <ChatCircleText size={24} />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">{item.message}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.type} • {item.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Next Training */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Επόμενη Προπόνηση</h3>
                <p className="text-blue-100">Αντοχή & Ταχύτητα</p>
              </div>
              <Calendar size={32} />
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-sm">Σήμερα, 18:00</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Διάρκεια: 90 λεπτά</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AthleteDashboardDemo; 