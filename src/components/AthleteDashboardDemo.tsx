import { motion } from 'framer-motion';
import {
  Heartbeat,
  Trophy,
  ChartLineUp,
  Calendar,
  ChatCircleText
} from '@phosphor-icons/react';
import React from 'react';

const AthleteDashboardDemo = () => {
  const performanceMetrics = [
    { label: 'Running', value: 85, icon: <ChartLineUp size={24} /> },
    { label: 'Jumping', value: 92, icon: <Trophy size={24} /> },
    { label: 'Endurance', value: 78, icon: <Heartbeat size={24} /> },
  ];

  const feedback = [
    {
      type: 'Coach',
      message: 'Great improvement in speed! Keep it up.',
      date: '2024-03-15'
    },
    {
      type: 'System',
      message: 'Your recovery is optimal today.',
      date: '2024-03-14'
    }
  ];

  // State για το modal και τα tests
  const [showQuestionnaireModal, setShowQuestionnaireModal] = React.useState(false);
  const [selectedTests, setSelectedTests] = React.useState<string[]>([]);
  const testOptions = [
    '15-30 IFT TEST',
    'CMJ TEST',
    'SPRINT TEST',
    'CODAT TEST',
  ];
  const [perceivedLoad, setPerceivedLoad] = React.useState({
    Sleep: true,
    Soreness: true,
    Recovery: true,
    Fatigue: true,
    'Psychological condition': true,
  });
  const [frequency, setFrequency] = React.useState('Daily');
  const frequencyOptions = ['Daily', 'Weekly', 'Biweekly', 'Monthly', 'Custom'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-blue-100 py-8 px-4">
      <div className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gradient-to-br from-emerald-200 to-blue-100 mb-10 overflow-hidden rounded-b-3xl shadow-2xl glass-effect border-4 border-transparent">
        <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="athlete dashboard hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text drop-shadow mb-4">Athlete Dashboard</h1>
          <p className="text-lg md:text-2xl text-gray-800 font-medium drop-shadow">Your personal progress and stats at a glance!</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 glass-effect rounded-2xl shadow-2xl p-8 mb-8 border-2 border-transparent hover:border-blue-400 transition-all duration-300"
        >
          {/* --- ΝΕΟ SECTION: Επιλογή tests, ερωτηματολόγιο, upload --- */}
          <div className="bg-white/90 glass-effect rounded-2xl shadow-2xl border border-blue-100/40 p-6 flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="flex flex-col gap-2 flex-1">
              <div className="font-semibold text-gray-800 mb-1">Choose tests</div>
              <div className="flex flex-wrap gap-3 mb-2">
                {testOptions.map((test) => (
                  <button
                    key={test}
                    onClick={() => setSelectedTests(selectedTests.includes(test) ? selectedTests.filter(t => t !== test) : [...selectedTests, test])}
                    className={`px-4 py-2 rounded-md font-semibold border-2 transition-all duration-200 text-sm shadow-md ${selectedTests.includes(test) ? 'bg-blue-600 text-white border-blue-700 scale-105' : 'bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300'}`}
                  >
                    {test}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowQuestionnaireModal(true)}
                className="mt-2 w-fit px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-all"
              >
                Create your questionnaire
              </button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-semibold text-gray-800 mb-1">Upload data</span>
              <button className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-3xl text-blue-600 bg-white shadow hover:bg-blue-50 transition-all">
                +
              </button>
            </div>
          </div>
          {/* --- Τέλος νέου section --- */}

          {/* MODAL FOR PERCEIVED LOAD QUESTIONNAIRE */}
          {showQuestionnaireModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative animate-fade-in">
                <button
                  onClick={() => setShowQuestionnaireModal(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-2xl font-bold"
                  aria-label="Close"
                >
                  ×
                </button>
                <h3 className="text-2xl font-bold text-center mb-6 text-blue-900">Perceived Load</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  {Object.keys(perceivedLoad).map((key) => (
                    <label key={key} className="flex flex-col items-center gap-2">
                      <span className="text-sm text-gray-700 text-center">{key}</span>
                      <input
                        type="checkbox"
                        checked={perceivedLoad[key as keyof typeof perceivedLoad]}
                        onChange={() => setPerceivedLoad(pl => ({ ...pl, [key]: !pl[key as keyof typeof perceivedLoad] }))}
                        className="w-6 h-6 accent-blue-600"
                      />
                    </label>
                  ))}
                </div>
                <div className="text-center font-semibold text-gray-700 mb-3">Frequency of data collection</div>
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  {frequencyOptions.map(opt => (
                    <label key={opt} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="frequency"
                        value={opt}
                        checked={frequency === opt}
                        onChange={() => setFrequency(opt)}
                        className="accent-blue-600"
                      />
                      <span className="text-sm text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>
                <button
                  onClick={() => setShowQuestionnaireModal(false)}
                  className="w-full mt-2 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-all"
                >
                  Save Questionnaire
                </button>
              </div>
            </div>
          )}

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
              <h2 className="text-xl font-semibold gradient-text drop-shadow">Recent Activity</h2>
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
                <h3 className="text-xl font-semibold mb-2">Next Training</h3>
                <p className="text-blue-100">Endurance & Speed</p>
              </div>
              <Calendar size={32} />
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-sm">Today, 18:00</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Duration: 90 minutes</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AthleteDashboardDemo; 