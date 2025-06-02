import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Medal } from '@phosphor-icons/react';

interface LeaderboardUser {
  id: string;
  username: string;
  displayName: string;
  points: number;
  rank: number;
  profilePicture?: string;
}

interface LeaderboardProps {
  users: LeaderboardUser[];
  timeFrame?: 'daily' | 'weekly' | 'monthly' | 'allTime';
}

const topColors = [
  'from-yellow-300/80 to-yellow-100/60', // 1st
  'from-gray-300/80 to-gray-100/60',     // 2nd
  'from-amber-400/80 to-amber-100/60',   // 3rd
];

const Leaderboard: React.FC<LeaderboardProps> = ({ users, timeFrame = 'allTime' }) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="text-yellow-500 drop-shadow-glow animate-bounce" weight="fill" />;
      case 2:
        return <Medal className="text-gray-400 animate-pulse" weight="fill" />;
      case 3:
        return <Medal className="text-amber-600 animate-pulse" weight="fill" />;
      default:
        return <Star className="text-blue-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto p-1 bg-gradient-to-br from-blue-400/40 via-white/30 to-purple-300/40 rounded-3xl shadow-2xl backdrop-blur-md border-4 border-transparent hover:border-blue-400 transition-all duration-500 group"
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-0 group-hover:animate-border-glow" style={{boxShadow: '0 0 40px 10px rgba(59,130,246,0.2)'}} />
        <div className="flex justify-between items-center mb-8 z-10 relative">
          <h2 className="text-3xl font-extrabold text-gray-900 drop-shadow-sm">Leaderboard</h2>
          <div className="flex gap-2">
            {['daily', 'weekly', 'monthly', 'allTime'].map((frame) => (
              <button
                key={frame}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm border ${
                  timeFrame === frame
                    ? 'bg-blue-600 text-white border-blue-600 scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-100 border-gray-200'
                }`}
              >
                {frame.charAt(0).toUpperCase() + frame.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <AnimatePresence>
            {users.map((user, idx) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ delay: idx * 0.07, type: 'spring', stiffness: 80 }}
                className={`flex items-center gap-4 p-4 rounded-xl shadow-md relative z-10 bg-gradient-to-br ${
                  user.rank <= 3 ? topColors[user.rank - 1] : 'from-blue-50/60 to-purple-50/60'
                } hover:scale-[1.03] hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-300`}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  {getRankIcon(user.rank)}
                </div>
                <div className="flex-1 flex items-center gap-4">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={user.displayName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 shadow"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-200 shadow">
                      <span className="text-blue-600 font-bold text-xl">
                        {user.displayName.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{user.displayName}</h3>
                    <p className="text-sm text-blue-700 font-mono">@{user.username}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="text-yellow-500" />
                  <span className="font-bold text-gray-900 text-lg">{user.points}</span>
                </div>
                {user.rank === 1 && (
                  <span className="absolute -top-3 -right-3 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">#1</span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Leaderboard; 