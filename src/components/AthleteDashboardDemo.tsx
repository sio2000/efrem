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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gradient-to-br from-emerald-200 to-blue-100 mb-10 overflow-hidden rounded-b-3xl shadow-lg">
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
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
        >
          {/* Athlete Profile Header */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-3xl text-blue-600 font-bold">ΓΠ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Γιώργος Παπαδόπουλος</h1>
              <p className="text-gray-600">ID: 1001</p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-blue-50 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">{metric.label}</span>
                  <div className="text-blue-600">{metric.icon}</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
                <p className="text-right mt-2 text-sm font-medium text-gray-700">
                  {metric.value}%
                </p>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Πρόσφατη Δραστηριότητα</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {feedback.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ backgroundColor: '#f8fafc' }}
                  className="p-4"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600">
                      <ChatCircleText size={24} />
                    </div>
                    <div>
                      <p className="text-gray-900">{item.message}</p>
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
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white"
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