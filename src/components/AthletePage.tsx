import { motion } from 'framer-motion';

const athletes = [
  {
    name: 'Lucas Moretti',
    country: 'Italy',
    countryCode: 'IT',
    flag: '🇮🇹',
    points: 9000,
    physical: 9100,
    psychological: 8900,
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    name: 'Sophie Dubois',
    country: 'France',
    countryCode: 'FR',
    flag: '🇫🇷',
    points: 8950,
    physical: 9000,
    psychological: 8900,
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    name: 'Mateo García',
    country: 'Spain',
    countryCode: 'ES',
    flag: '🇪🇸',
    points: 8800,
    physical: 8700,
    psychological: 8900,
    image: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    name: 'Emily Johnson',
    country: 'USA',
    countryCode: 'US',
    flag: '🇺🇸',
    points: 8750,
    physical: 8600,
    psychological: 8900,
    image: 'https://randomuser.me/api/portraits/women/36.jpg',
  },
  {
    name: 'Akira Sato',
    country: 'Japan',
    countryCode: 'JP',
    flag: '🇯🇵',
    points: 8650,
    physical: 8700,
    psychological: 8600,
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: "Liam O'Connor",
    country: 'Ireland',
    countryCode: 'IE',
    flag: '🇮🇪',
    points: 8600,
    physical: 8500,
    psychological: 8700,
    image: 'https://randomuser.me/api/portraits/men/53.jpg',
  },
  {
    name: 'Anna Müller',
    country: 'Germany',
    countryCode: 'DE',
    flag: '🇩🇪',
    points: 8550,
    physical: 8600,
    psychological: 8500,
    image: 'https://randomuser.me/api/portraits/women/54.jpg',
  },
  {
    name: 'Carlos Silva',
    country: 'Brazil',
    countryCode: 'BR',
    flag: '🇧🇷',
    points: 8500,
    physical: 8400,
    psychological: 8600,
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    name: 'Mia Rossi',
    country: 'Italy',
    countryCode: 'IT',
    flag: '🇮🇹',
    points: 8450,
    physical: 8500,
    psychological: 8400,
    image: 'https://randomuser.me/api/portraits/women/56.jpg',
  },
  {
    name: 'David Smith',
    country: 'UK',
    countryCode: 'GB',
    flag: '🇬🇧',
    points: 8400,
    physical: 8300,
    psychological: 8500,
    image: 'https://randomuser.me/api/portraits/men/57.jpg',
  },
];

const topAthletes = athletes.sort((a, b) => b.points - a.points).slice(0, 10);

const rowColors = [
  'from-yellow-100/80 to-yellow-50/60', // gold
  'from-gray-100/80 to-gray-50/60',     // silver
  'from-amber-100/80 to-amber-50/60',   // bronze
];

const medalIcon = (idx: number) => {
  if (idx === 0) return <span className="text-xl mr-1">🥇</span>;
  if (idx === 1) return <span className="text-xl mr-1">🥈</span>;
  if (idx === 2) return <span className="text-xl mr-1">🥉</span>;
  return <span className="text-lg font-bold text-blue-700 mr-1">{idx + 1}</span>;
};

const userAthlete = {
  name: 'Anna Müller',
  image: 'https://randomuser.me/api/portraits/women/54.jpg',
  overall: 85,
  rank: 7,
  rating: 4.2,
  stats: {
    Speed: 83,
    Acceleration: 86,
    Jump: 88,
    Agility: 84,
    Physical: 85,
  },
};

const motivationalMsg = (
  <div className="w-full flex justify-center mb-10">
    <div className="w-full max-w-5xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 px-8 md:px-20 py-8 text-center" style={{ borderRadius: '32px', boxShadow: 'none', border: 'none' }}>
      <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-700 via-blue-700 to-pink-600 bg-clip-text text-transparent mb-4">Your performance this year is outstanding!</div>
      <div className="text-xl md:text-2xl text-blue-900 font-bold mb-2">You are currently ranked <span className="text-blue-700 font-extrabold">#{userAthlete.rank}</span> in your category with an overall score of <span className="text-pink-600 font-extrabold">{userAthlete.overall}</span>!</div>
      <div className="text-lg md:text-xl text-gray-700 font-medium">Keep up the hard work and aim even higher! You can climb the leaderboard and surpass yourself. 💪</div>
    </div>
  </div>
);

const AthleteProfileCard = (
  <div className="max-w-md mx-auto mb-12 relative animate-fade-in">
    <div className="absolute -top-6 right-8 z-10">
      <span className="bg-gradient-to-r from-blue-500 to-purple-400 text-white px-5 py-2 rounded-full text-lg font-bold shadow-lg border-2 border-white/80">#{userAthlete.rank}</span>
    </div>
    <div className="bg-white/90 glass-effect rounded-3xl shadow-2xl px-8 py-10 flex flex-col items-center border-2 border-blue-200/40">
      <img src={userAthlete.image} alt={userAthlete.name} className="w-24 h-24 rounded-xl object-cover border-4 border-blue-300 shadow mb-4" />
      <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow mb-2">{userAthlete.name}</div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl text-yellow-500">🏆</span>
        <span className="text-xl font-bold text-gray-900">Overall: {userAthlete.overall}</span>
      </div>
      <div className="flex items-center gap-1 mb-4">
        {[1,2,3,4,5].map(i => (
          <span key={i} className={i <= Math.floor(userAthlete.rating) ? 'text-yellow-400 text-2xl' : 'text-gray-300 text-2xl'}>★</span>
        ))}
        <span className="ml-2 text-blue-700 font-bold text-lg">{userAthlete.rating}</span>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full mb-2">
        <div className="flex items-center gap-2 bg-blue-50 rounded-xl px-4 py-2 font-semibold text-blue-700 shadow"><span className="text-blue-400">⚡</span>Speed: <span className="ml-auto font-bold">{userAthlete.stats.Speed}</span></div>
        <div className="flex items-center gap-2 bg-blue-50 rounded-xl px-4 py-2 font-semibold text-blue-700 shadow"><span className="text-blue-400">🚀</span>Acceleration: <span className="ml-auto font-bold">{userAthlete.stats.Acceleration}</span></div>
        <div className="flex items-center gap-2 bg-yellow-50 rounded-xl px-4 py-2 font-semibold text-yellow-700 shadow"><span className="text-yellow-400">🏆</span>Jump: <span className="ml-auto font-bold">{userAthlete.stats.Jump}</span></div>
        <div className="flex items-center gap-2 bg-emerald-50 rounded-xl px-4 py-2 font-semibold text-emerald-700 shadow"><span className="text-emerald-400">🧬</span>Agility: <span className="ml-auto font-bold">{userAthlete.stats.Agility}</span></div>
      </div>
      <div className="flex items-center gap-2 bg-pink-50 rounded-xl px-4 py-2 font-semibold text-pink-700 shadow w-full justify-center"><span className="text-pink-400">⭐</span>Physical: <span className="ml-1 font-bold">{userAthlete.stats.Physical}</span></div>
    </div>
  </div>
);

const AthletePage = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden bg-gradient-to-br from-blue-300 via-purple-200 to-pink-200">
      {/* Hero Section */}
      <div className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center mb-12 overflow-hidden rounded-b-3xl shadow-2xl border-0 z-10">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="athlete-bg"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-800/60 to-pink-700/60" />
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-4 tracking-tight animate-fade-in">
            🌍 World Athlete Ranking
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-2 animate-fade-in delay-100 drop-shadow-lg">
            The top 10 athletes on the planet. Who will be #1?
          </p>
        </motion.div>
      </div>
      {/* Athlete Exclusive Stats Section (now below hero) */}
      {motivationalMsg}
      {AthleteProfileCard}
      {/* World Ranking Table */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-3xl bg-white/80 glass-effect rounded-3xl shadow-2xl p-0 md:p-4 border-2 border-blue-200/40 backdrop-blur-xl relative z-20 mb-16"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-center">
            <thead>
              <tr>
                <th className="py-5 px-2 text-xl font-extrabold text-blue-700">#</th>
                <th className="py-5 px-2 text-xl font-extrabold text-blue-700">Athlete</th>
                <th className="py-5 px-2 text-xl font-extrabold text-blue-700">Country</th>
                <th className="py-5 px-2 text-xl font-extrabold text-blue-700">Overall Performance</th>
                <th className="py-5 px-2 text-xl font-extrabold text-blue-700">Physical Tests</th>
                <th className="py-5 px-2 text-xl font-extrabold text-blue-700">Psychological Tests</th>
              </tr>
            </thead>
            <tbody>
              {topAthletes.map((athlete, idx) => (
                <motion.tr
                  key={athlete.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className={`transition-all duration-300 hover:scale-[1.025] hover:shadow-xl cursor-pointer ${
                    idx < 3
                      ? `bg-gradient-to-r ${rowColors[idx]} border-2 border-blue-200/60`
                      : 'bg-white/80 border-b border-blue-100'
                  } rounded-2xl`}
                  style={{ boxShadow: idx < 3 ? '0 4px 24px 0 rgba(31, 38, 135, 0.10)' : undefined }}
                >
                  {/* Rank/Medal */}
                  <td className="py-5 px-2 text-2xl font-extrabold">{medalIcon(idx)}</td>
                  {/* Athlete */}
                  <td className="py-5 px-2 text-lg font-bold text-gray-900">
                    <div className="flex items-center gap-4 justify-center">
                      <img src={athlete.image} alt={athlete.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-300 shadow" />
                      <span>{athlete.name}</span>
                    </div>
                  </td>
                  {/* Country */}
                  <td className="py-5 px-2 text-lg font-semibold text-blue-700">
                    <span className="text-2xl align-middle mr-1">{athlete.flag}</span>
                    <span className="font-bold text-base align-middle mr-1">{athlete.countryCode}</span>
                    <span className="text-blue-500 text-sm font-medium align-middle">{athlete.country}</span>
                  </td>
                  {/* Overall Performance */}
                  <td className="py-5 px-2 text-xl font-extrabold text-pink-600">
                    <span className="inline-flex items-center">
                      <svg className="w-6 h-6 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                      <span>{athlete.points.toLocaleString()}</span>
                    </span>
                  </td>
                  {/* Physical Tests */}
                  <td className="py-5 px-2 text-lg font-bold text-emerald-700">{athlete.physical.toLocaleString()}</td>
                  {/* Psychological Tests */}
                  <td className="py-5 px-2 text-lg font-bold text-purple-700">{athlete.psychological.toLocaleString()}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AthletePage; 