import React from 'react';
import { Star, Trophy, Lightning, ArrowUpRight, UsersThree } from '@phosphor-icons/react';

const athlete = {
  name: 'Allen Iverson',
  image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ranking: 6,
  overall: 82,
  stats: [
    { label: 'Speed', value: 82, icon: <Lightning size={20} className="text-blue-500" /> },
    { label: 'Acceleration', value: 82, icon: <ArrowUpRight size={20} className="text-purple-500" /> },
    { label: 'Jump', value: 82, icon: <Trophy size={20} className="text-amber-500" /> },
    { label: 'Agility', value: 82, icon: <UsersThree size={20} className="text-emerald-500" /> },
    { label: 'Physical', value: 82, icon: <Star size={20} className="text-pink-500" /> },
  ],
  rating: 4.5,
};

const AthletePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center py-16">
      <div className="max-w-xl w-full mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-200/80 to-purple-200/80 shadow-xl border-2 border-blue-200 flex flex-col items-center text-center animate-fade-in">
        <h2 className="text-2xl font-bold gradient-text mb-2 drop-shadow">Η απόδοσή σου φέτος είναι εξαιρετική!</h2>
        <p className="text-lg text-gray-700 mb-2">Βρίσκεσαι αυτή τη στιγμή στη <span className='font-bold text-blue-700'>θέση #{athlete.ranking}</span> της κατηγορίας σου με συνολικό σκορ <span className='font-bold text-purple-700'>{athlete.overall}</span>!</p>
        <p className="text-md text-gray-600">Συνέχισε τη σκληρή δουλειά και στόχευσε ακόμα ψηλότερα! Μπορείς να ανέβεις στο leaderboard και να ξεπεράσεις τον εαυτό σου. 💪</p>
      </div>
      <div className="bg-white/80 glass-effect rounded-3xl shadow-2xl p-10 max-w-md w-full relative border-4 border-transparent hover:border-blue-400 transition-all duration-500">
        <div className="absolute -top-8 right-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-lg text-lg font-bold animate-bounce">
          #{athlete.ranking}
        </div>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl mb-4 border-4 border-blue-200">
            <img src={athlete.image} alt={athlete.name} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-extrabold gradient-text mb-2 drop-shadow">{athlete.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-yellow-500 animate-bounce" size={28} />
            <span className="text-gray-800 font-bold text-xl">Overall: {athlete.overall}</span>
          </div>
          <div className="flex items-center gap-1 mb-6">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={24} className={i <= Math.floor(athlete.rating) ? 'text-yellow-400' : 'text-gray-300'} />
            ))}
            <span className="ml-2 text-blue-700 font-semibold">{athlete.rating.toFixed(1)}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mb-4">
            {athlete.stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-blue-50/70 rounded-xl px-4 py-2 shadow-md">
                {stat.icon}
                <span className="font-bold text-gray-800">{stat.label}:</span>
                <span className="text-blue-700 font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthletePage; 