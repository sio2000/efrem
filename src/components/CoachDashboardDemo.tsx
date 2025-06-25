import { motion } from 'framer-motion';
import { Users, ChartLineUp, Warning, Trophy, UserCircle, Info, WarningCircle, CheckCircle, ShieldWarning, MagnifyingGlass, SoccerBall, Basketball, Volleyball } from '@phosphor-icons/react';
import React, { useState } from 'react';

const stats = [
  { icon: <Users size={32} weight="duotone" />, label: 'Total Athletes', value: '4', color: 'from-emerald-400 to-teal-500' },
  { icon: <ChartLineUp size={32} weight="duotone" />, label: 'Average Performance', value: '81%', color: 'from-purple-500 to-purple-700' },
  { icon: <Warning size={32} weight="duotone" />, label: 'Notifications', value: '2', color: 'from-yellow-400 to-yellow-600' },
  { icon: <Trophy size={32} weight="duotone" />, label: 'Achievements', value: '156', color: 'from-emerald-500 to-emerald-700' },
];

const athletes = [
  {
    name: 'Lucas Moretti',
    id: '2001',
    age: 25,
    height: 182,
    weight: 77,
    preferredName: 'Lucas',
    dob: '15/03/99',
    dominantFoot: 'Right',
    nationality: 'Italy',
    position: 'FW',
    squadNumber: 11,
    contractStatus: 'Until 2026',
    status: 'Optimal',
    sport: 'Football',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    stats: {
      overallRecovery: { mostRecent: 8.5, relativeLoss: 2.1, radar: [85, 80, 90, 75, 88, 82] },
      inflammation: { mostRecent: 2.0, avg: 1.5, avg14: 2.2, avg30: 1.8, warning: false },
      jointRange: { mostRecent: 0.5, avg: 0.3, avg14: 0.4, avg30: 0.2 },
      loadTolerance: { mostRecent: 9.0, avg: 8.5, avg14: 8.8, avg30: 8.6 },
      perceivedRecovery: { mostRecent: 7.5, avg: 7.2, avg7: 7.3, avg30: 7.1 },
      sleep: { mostRecent: 7.8, avg: 7.5, avg7: 7.6, avg30: 7.4, warning: false },
      soreness: { mostRecent: 1.0, avg: 1.2, avg7: 1.1, avg30: 1.0, warning: false },
      sorenessLocation: 'none',
    },
    sprintTimes: { week: [4.1, 4.2, 4.0, 4.3, 4.1, 4.2, 4.0], month: [4.2, 4.1, 4.0, 4.3, 4.1, 4.2, 4.0] },
    psychological: { motivation: [8, 9, 8, 8, 9, 8, 9], stress: [2, 3, 2, 2, 3, 2, 2], focus: [9, 8, 9, 9, 8, 9, 8], mood: [8, 8, 9, 8, 9, 8, 9] },
  },
  {
    name: 'Γιώργος Παπαδόπουλος',
    id: '1001',
    age: 22,
    height: 180,
    weight: 78,
    preferredName: 'Γιώργος',
    dob: '10/02/02',
    dominantFoot: 'Right',
    nationality: 'Greece',
    position: 'RW',
    squadNumber: 7,
    contractStatus: 'Until 2027',
    status: 'Optimal',
    sport: 'Football',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    stats: {
      overallRecovery: {
        mostRecent: -9.9,
        relativeLoss: -9.9,
        radar: [60, 40, 80, 30, 70, 50],
      },
      inflammation: {
        mostRecent: -31.1,
        avg: -20.0,
        avg14: -33.4,
        avg30: -46.8,
        warning: true,
      },
      jointRange: {
        mostRecent: -1.9,
        avg: -5.0,
        avg14: -7.7,
        avg30: -6.2,
      },
      loadTolerance: {
        mostRecent: 19.0,
        avg: 10.0,
        avg14: 25.1,
        avg30: 12.7,
      },
      perceivedRecovery: {
        mostRecent: -8.2,
        avg: -6.0,
        avg7: -7.0,
        avg30: -11.8,
      },
      sleep: {
        mostRecent: -23.3,
        avg: -10.0,
        avg7: -16.0,
        avg30: -7.4,
        warning: true,
      },
      soreness: {
        mostRecent: -10.0,
        avg: -8.0,
        avg7: -12.1,
        avg30: -6.7,
        warning: true,
      },
      sorenessLocation: 'hamstring',
    },
    sprintTimes: {
      week: [4.2, 4.5, 4.3, 4.7, 3.8, 5.1, 4.8],
      month: [4.3, 4.4, 4.2, 4.6, 4.0, 5.0, 4.7],
    },
    psychological: {
      motivation: [7, 8, 6, 7, 8, 9, 7],
      stress: [3, 4, 5, 4, 3, 2, 4],
      focus: [8, 7, 8, 9, 8, 7, 8],
      mood: [6, 7, 7, 8, 7, 6, 7],
    },
  },
  {
    name: 'Μαρία Κωνσταντινίδου',
    id: '1002',
    age: 24,
    height: 168,
    weight: 62,
    preferredName: 'Μαρία',
    dob: '12/05/00',
    dominantFoot: 'Left',
    nationality: 'Greece',
    position: 'MF',
    squadNumber: 10,
    contractStatus: 'Until 2026',
    status: 'Warning',
    sport: 'Basketball',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    stats: {
      overallRecovery: {
        mostRecent: -12.5,
        relativeLoss: -12.5,
        radar: [50, 60, 70, 40, 60, 55],
      },
      inflammation: {
        mostRecent: -22.0,
        avg: -18.0,
        avg14: -25.0,
        avg30: -30.0,
        warning: false,
      },
      jointRange: {
        mostRecent: -3.2,
        avg: -4.0,
        avg14: -6.0,
        avg30: -5.0,
      },
      loadTolerance: {
        mostRecent: 15.0,
        avg: 12.0,
        avg14: 18.0,
        avg30: 10.0,
      },
      perceivedRecovery: {
        mostRecent: -10.1,
        avg: -8.0,
        avg7: -9.0,
        avg30: -13.0,
      },
      sleep: {
        mostRecent: -18.0,
        avg: -12.0,
        avg7: -14.0,
        avg30: -8.0,
        warning: false,
      },
      soreness: {
        mostRecent: -7.0,
        avg: -6.0,
        avg7: -8.0,
        avg30: -5.0,
        warning: false,
      },
      sorenessLocation: 'calf',
    },
    sprintTimes: {
      week: [4.8, 4.7, 4.6, 4.9, 4.5, 5.0, 4.6],
      month: [4.7, 4.8, 4.6, 4.9, 4.5, 5.1, 4.8],
    },
    psychological: {
      motivation: [6, 7, 7, 8, 7, 6, 7],
      stress: [4, 5, 4, 5, 4, 3, 4],
      focus: [7, 8, 7, 8, 7, 8, 7],
      mood: [7, 7, 8, 7, 8, 7, 8],
    },
  },
  {
    name: 'Anna Müller',
    id: '2002',
    age: 23,
    height: 170,
    weight: 65,
    preferredName: 'Anna',
    dob: '22/07/01',
    dominantFoot: 'Right',
    nationality: 'Germany',
    position: 'MF',
    squadNumber: 8,
    contractStatus: 'Until 2027',
    status: 'Warning',
    sport: 'Football',
    image: 'https://randomuser.me/api/portraits/women/54.jpg',
    stats: {
      overallRecovery: { mostRecent: 7.2, relativeLoss: 1.8, radar: [80, 75, 85, 70, 82, 78] },
      inflammation: { mostRecent: 1.2, avg: 1.0, avg14: 1.1, avg30: 1.0, warning: false },
      jointRange: { mostRecent: 0.3, avg: 0.2, avg14: 0.3, avg30: 0.2 },
      loadTolerance: { mostRecent: 8.0, avg: 7.8, avg14: 7.9, avg30: 7.7 },
      perceivedRecovery: { mostRecent: 6.8, avg: 6.5, avg7: 6.6, avg30: 6.4 },
      sleep: { mostRecent: 7.0, avg: 6.8, avg7: 6.9, avg30: 6.7, warning: false },
      soreness: { mostRecent: 0.8, avg: 0.9, avg7: 0.8, avg30: 0.8, warning: false },
      sorenessLocation: 'none',
    },
    sprintTimes: { week: [4.4, 4.3, 4.2, 4.5, 4.3, 4.4, 4.2], month: [4.3, 4.4, 4.2, 4.5, 4.3, 4.4, 4.2] },
    psychological: { motivation: [7, 8, 7, 7, 8, 7, 8], stress: [3, 4, 3, 3, 4, 3, 3], focus: [8, 7, 8, 8, 7, 8, 7], mood: [7, 7, 8, 7, 8, 7, 8] },
  },
  {
    name: 'Νίκος Αλεξίου',
    id: '1003',
    age: 21,
    height: 182,
    weight: 80,
    preferredName: 'Νίκος',
    dob: '03/11/01',
    dominantFoot: 'Right',
    nationality: 'Greece',
    position: 'DF',
    squadNumber: 5,
    contractStatus: 'Until 2028',
    status: 'Optimal',
    sport: 'Volleyball',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    stats: {
      overallRecovery: {
        mostRecent: -7.0,
        relativeLoss: -7.0,
        radar: [80, 70, 90, 60, 85, 75],
      },
      inflammation: {
        mostRecent: -15.0,
        avg: -10.0,
        avg14: -12.0,
        avg30: -15.0,
        warning: false,
      },
      jointRange: {
        mostRecent: -2.0,
        avg: -3.0,
        avg14: -4.0,
        avg30: -3.0,
      },
      loadTolerance: {
        mostRecent: 22.0,
        avg: 18.0,
        avg14: 20.0,
        avg30: 15.0,
      },
      perceivedRecovery: {
        mostRecent: -5.0,
        avg: -4.0,
        avg7: -5.0,
        avg30: -7.0,
      },
      sleep: {
        mostRecent: -10.0,
        avg: -8.0,
        avg7: -9.0,
        avg30: -6.0,
        warning: false,
      },
      soreness: {
        mostRecent: -4.0,
        avg: -3.0,
        avg7: -4.0,
        avg30: -2.0,
        warning: false,
      },
      sorenessLocation: 'none',
    },
    sprintTimes: {
      week: [4.1, 4.3, 4.2, 4.4, 4.0, 4.5, 4.3],
      month: [4.2, 4.3, 4.1, 4.4, 4.0, 4.6, 4.2],
    },
    psychological: {
      motivation: [8, 8, 7, 8, 9, 8, 8],
      stress: [2, 3, 3, 2, 3, 2, 3],
      focus: [9, 8, 9, 8, 9, 8, 9],
      mood: [8, 8, 9, 8, 9, 8, 9],
    },
  },
  {
    name: 'Ελένη Δημητρίου',
    id: '1004',
    age: 23,
    height: 170,
    weight: 65,
    preferredName: 'Ελένη',
    dob: '07/09/00',
    dominantFoot: 'Left',
    nationality: 'Greece',
    position: 'FW',
    squadNumber: 9,
    contractStatus: 'Until 2025',
    status: 'Risk',
    sport: 'Football',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    stats: {
      overallRecovery: {
        mostRecent: -18.0,
        relativeLoss: -18.0,
        radar: [30, 20, 40, 15, 25, 18],
      },
      inflammation: {
        mostRecent: -40.0,
        avg: -35.0,
        avg14: -38.0,
        avg30: -41.0,
        warning: true,
      },
      jointRange: {
        mostRecent: -5.0,
        avg: -6.0,
        avg14: -7.0,
        avg30: -6.0,
      },
      loadTolerance: {
        mostRecent: 10.0,
        avg: 8.0,
        avg14: 12.0,
        avg30: 7.0,
      },
      perceivedRecovery: {
        mostRecent: -15.0,
        avg: -12.0,
        avg7: -13.0,
        avg30: -16.0,
      },
      sleep: {
        mostRecent: -30.0,
        avg: -25.0,
        avg7: -28.0,
        avg30: -22.0,
        warning: true,
      },
      soreness: {
        mostRecent: -20.0,
        avg: -18.0,
        avg7: -19.0,
        avg30: -17.0,
        warning: true,
      },
      sorenessLocation: 'quad',
    },
    sprintTimes: {
      week: [5.0, 4.9, 5.1, 5.0, 4.8, 5.2, 5.1],
      month: [5.1, 5.0, 5.2, 5.1, 4.9, 5.3, 5.2],
    },
    psychological: {
      motivation: [5, 6, 6, 7, 6, 5, 6],
      stress: [5, 6, 5, 6, 5, 6, 5],
      focus: [6, 7, 6, 7, 6, 7, 6],
      mood: [6, 6, 7, 6, 7, 6, 7],
    },
  },
];

const statusMeta = {
  Optimal: {
    label: 'Optimal',
    icon: <CheckCircle size={18} className="text-green-400 animate-pulse" />,
    className: 'bg-gradient-to-r from-green-500/80 to-emerald-400/80 text-white border-green-300 shadow-green-200/40',
  },
  Warning: {
    label: 'Warning',
    icon: <WarningCircle size={18} className="text-yellow-400 animate-bounce" />,
    className: 'bg-gradient-to-r from-yellow-400/80 to-yellow-200/80 text-yellow-900 border-yellow-300 shadow-yellow-200/40',
  },
  Risk: {
    label: 'Risk',
    icon: <ShieldWarning size={18} className="text-red-400 animate-pulse" />,
    className: 'bg-gradient-to-r from-red-500/80 to-pink-400/80 text-white border-red-300 shadow-red-200/40',
  },
};

const sportMeta = {
  Football: { label: 'Football', icon: <SoccerBall size={16} className="text-blue-500" />, className: 'bg-blue-100 text-blue-700' },
  Basketball: { label: 'Basketball', icon: <Basketball size={16} className="text-orange-500" />, className: 'bg-orange-100 text-orange-700' },
  Volleyball: { label: 'Volleyball', icon: <Volleyball size={16} className="text-emerald-500" />, className: 'bg-emerald-100 text-emerald-700' },
};

const allSports = Array.from(new Set(athletes.map(a => a.sport)));

const safeMetric = (metric: any) => (typeof metric === 'object' && metric !== null ? metric : {});

const getSportMeta = (sport: string) => {
  return sportMeta[sport as keyof typeof sportMeta] || { label: sport, icon: null, className: 'bg-gray-100 text-gray-700' };
};

const ProfileCard = ({ athlete }: { athlete: typeof athletes[0] }) => (
  <div className="rounded-2xl bg-[#23263A] border border-white/10 shadow-lg p-4 flex flex-col items-center md:items-start min-w-[220px]">
    <img src={athlete.image} alt={athlete.name} className="w-20 h-20 rounded-xl object-cover border-2 border-blue-700 shadow mb-2" />
    <div className="text-lg font-bold text-white mb-1">{athlete.name}</div>
    <div className="mb-2">
      <span className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-semibold shadow-sm ${getSportMeta(athlete.sport).className}`}> 
        {getSportMeta(athlete.sport).icon}
        {getSportMeta(athlete.sport).label}
      </span>
    </div>
    <div className="text-xs text-gray-400 mb-1">ID: {athlete.id}</div>
    <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-2">
      <span>Age: {athlete.age}</span>
      <span>•</span>
      <span>{athlete.height}cm</span>
      <span>•</span>
      <span>{athlete.weight}kg</span>
    </div>
    <span className={`inline-flex items-center gap-2 px-4 py-1 rounded-full border text-xs font-semibold shadow-md transition-all duration-300 ${statusMeta[athlete.status as keyof typeof statusMeta].className}`}>
      {statusMeta[athlete.status as keyof typeof statusMeta].icon}
      {statusMeta[athlete.status as keyof typeof statusMeta].label}
    </span>
  </div>
);

const InfoCard = ({ athlete }: { athlete: typeof athletes[0] }) => (
  <div className="rounded-2xl bg-[#23263A] border border-white/10 shadow-lg p-4 text-xs text-gray-300 min-w-[220px]">
    <div className="mb-2"><span className="text-gray-400">Preferred Name:</span> {athlete.preferredName}</div>
    <div className="mb-2"><span className="text-gray-400">Date of Birth:</span> {athlete.dob}</div>
    <div className="mb-2"><span className="text-gray-400">Dominant Foot:</span> {athlete.dominantFoot}</div>
    <div className="mb-2"><span className="text-gray-400">Nationality:</span> {athlete.nationality}</div>
    <div className="mb-2"><span className="text-gray-400">Primary Position:</span> {athlete.position}</div>
    <div className="mb-2"><span className="text-gray-400">Squad Number:</span> {athlete.squadNumber}</div>
    <div><span className="text-gray-400">Contract Status:</span> {athlete.contractStatus}</div>
  </div>
);

const MetricCard = ({ title, subtitle, mostRecent, avg, avg7, avg14, avg30, warning }: any) => (
  <div className="rounded-2xl bg-[#23263A] border border-white/10 shadow-lg p-4 flex flex-col min-w-[200px]">
    <div className="flex items-center gap-2 mb-1">
      <span className="font-semibold text-white text-sm">{title}</span>
      {warning && <WarningCircle size={18} className="text-yellow-400 animate-pulse" />}
    </div>
    {subtitle && <div className="text-xs text-gray-400 mb-2">{subtitle}</div>}
    <div className="flex items-center gap-2 mb-2">
      <span className="text-lg font-bold text-pink-400">{mostRecent > 0 ? '+' : ''}{mostRecent}%</span>
      <span className="text-xs text-gray-400">Most Recent</span>
    </div>
    {avg !== undefined && <div className="text-xs text-gray-400 mb-1">Avg: <span className="text-white font-semibold">{avg}%</span></div>}
    {avg7 !== undefined && <div className="text-xs text-gray-400 mb-1">7-Day Avg: <span className="text-white font-semibold">{avg7}%</span></div>}
    {avg14 !== undefined && <div className="text-xs text-gray-400 mb-1">14-Day Avg: <span className="text-white font-semibold">{avg14}%</span></div>}
    {avg30 !== undefined && <div className="text-xs text-gray-400 mb-1">30-Day Avg: <span className="text-white font-semibold">{avg30}%</span></div>}
  </div>
);

const RadarChart = ({ data }: { data: number[] }) => {
  // data: array of 6 values (0-100)
  const center = 64;
  const radius = 54;
  const points = data.map((v, i) => {
    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
    const r = (v / 100) * radius;
    return [center + r * Math.cos(angle), center + r * Math.sin(angle)];
  });
  const polygon = points.map((p) => p.join(",")).join(" ");
  const axis = Array.from({ length: 6 }).map((_, i) => {
    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
    return [center + radius * Math.cos(angle), center + radius * Math.sin(angle)];
  });
  const labels = ['Soreness', 'Inflammation', 'Joint Range', 'Load Tolerance', 'Perceived Recovery', 'Sleep'];
  return (
    <svg width={128} height={128} className="mx-auto">
      {/* Axes */}
      {axis.map((p, i) => (
        <line key={i} x1={center} y1={center} x2={p[0]} y2={p[1]} stroke="#fff" strokeOpacity="0.15" />
      ))}
      {/* Polygon */}
      <polygon points={polygon} fill="#ec4899" fillOpacity="0.18" stroke="#ec4899" strokeWidth={2} />
      {/* Dots */}
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={3} fill="#ec4899" />
      ))}
      {/* Labels */}
      {axis.map((p, i) => (
        <text
          key={i}
          x={p[0]}
          y={p[1]}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="8"
          fill="#fff"
          opacity="0.7"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {labels[i]}
        </text>
      ))}
    </svg>
  );
};

const SorenessLocationCard = ({ location }: { location: string }) => {
  // SVG path highlights for calf, hamstring, quad, etc.
  const highlights: Record<string, JSX.Element | null> = {
    calf: (
      <g>
        {/* Left calf */}
        <rect x="32" y="100" width="8" height="24" rx="4" fill="url(#calfGradient)" />
        {/* Right calf */}
        <rect x="40" y="100" width="8" height="24" rx="4" fill="url(#calfGradient)" />
      </g>
    ),
    hamstring: (
      <g>
        {/* Left hamstring */}
        <rect x="32" y="70" width="8" height="30" rx="4" fill="url(#hamGradient)" />
        {/* Right hamstring */}
        <rect x="40" y="70" width="8" height="30" rx="4" fill="url(#hamGradient)" />
      </g>
    ),
    quad: (
      <g>
        {/* Left quad */}
        <rect x="32" y="50" width="8" height="20" rx="4" fill="url(#quadGradient)" />
        {/* Right quad */}
        <rect x="40" y="50" width="8" height="20" rx="4" fill="url(#quadGradient)" />
      </g>
    ),
    none: null,
  };
  return (
    <div className="rounded-2xl bg-[#23263A] border border-white/10 shadow-lg p-4 flex flex-col items-center min-w-[200px]">
      <div className="font-semibold text-white text-sm mb-2">Soreness Location</div>
      <svg width="64" height="140" viewBox="0 0 80 140" className="mb-2">
        <defs>
          <linearGradient id="calfGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="hamGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a21caf" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="quadGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e42" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Body outline */}
        <ellipse cx="40" cy="30" rx="18" ry="28" fill="#fff" opacity="0.10" />
        <rect x="36" y="58" width="8" height="60" rx="4" fill="#fff" opacity="0.10" />
        {/* Arms */}
        <rect x="18" y="50" width="16" height="8" rx="4" fill="#fff" opacity="0.10" />
        <rect x="46" y="50" width="16" height="8" rx="4" fill="#fff" opacity="0.10" />
        {/* Highlights */}
        {highlights[location]}
      </svg>
      <div className="text-xs text-gray-400 text-center">
        {location === 'none' ? 'No soreness reported' : `Reported soreness on ${location}`}
      </div>
    </div>
  );
};

const SprintChart = ({ data, avg, period }: { data: number[], avg: number, period: 'week' | 'month' }) => {
  const days = ['Monday', 'Tuesday', 'Wedn.', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <svg width="220" height="100" viewBox="0 0 220 100">
      <rect x="0" y="0" width="220" height="100" rx="16" fill="url(#bg)" />
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbc2eb" />
          <stop offset="100%" stopColor="#fcd6e6" />
        </linearGradient>
      </defs>
      <line x1="30" y1="15" x2="30" y2="85" stroke="#b91c1c" strokeWidth="2" />
      <line x1="30" y1="85" x2="200" y2="85" stroke="#b91c1c" strokeWidth="2" />
      <polyline
        fill="none"
        stroke="#7c3aed"
        strokeWidth="2"
        points={data.map((_, i) => `${30 + i * 24},${85 - avg * 7}` ).join(' ')}
      />
      <polyline
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
        points={data.map((v, i) => `${30 + i * 24},${85 - v * 7}` ).join(' ')}
      />
      {days.map((d, i) => (
        <text key={d} x={30 + i * 24} y={97} textAnchor="middle" fontSize="9" fill="#222">{d[0]}</text>
      ))}
      <text x="5" y="30" fontSize="10" fill="#222">Average</text>
    </svg>
  );
};

const PsychologicalChart = ({ label, data }: { label: string, data: number[] }) => {
  const days = ['Monday', 'Tuesday', 'Wedn.', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const avg = data.reduce((a, b) => a + b, 0) / data.length;
  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-3 border border-blue-300 shadow flex flex-col items-center mb-3 w-full max-w-xs mx-auto">
      <div className="font-bold text-sm mb-1 text-gray-800">Last Week</div>
      <div className="font-bold text-base mb-1 text-gray-900">{label}</div>
      <svg width="220" height="100" viewBox="0 0 220 100">
        <rect x="0" y="0" width="220" height="100" rx="16" fill="url(#bg2)" />
        <defs>
          <linearGradient id="bg2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c2e9fb" />
            <stop offset="100%" stopColor="#e0c3fc" />
          </linearGradient>
        </defs>
        <line x1="30" y1="15" x2="30" y2="85" stroke="#2563eb" strokeWidth="2" />
        <line x1="30" y1="85" x2="200" y2="85" stroke="#2563eb" strokeWidth="2" />
        <polyline
          fill="none"
          stroke="#9333ea"
          strokeWidth="2"
          points={data.map((_, i) => `${30 + i * 24},${85 - avg * 7}` ).join(' ')}
        />
        <polyline
          fill="none"
          stroke="#f59e42"
          strokeWidth="2"
          points={data.map((v, i) => `${30 + i * 24},${85 - v * 7}` ).join(' ')}
        />
        {days.map((d, i) => (
          <text key={d} x={30 + i * 24} y={97} textAnchor="middle" fontSize="9" fill="#222">{d[0]}</text>
        ))}
        <text x="5" y="30" fontSize="10" fill="#222">Average</text>
      </svg>
    </div>
  );
};

const AthleteCard = ({ athlete, onShowStats }: { athlete: typeof athletes[0], onShowStats: () => void }) => {
  const overallRecovery = safeMetric(athlete.stats.overallRecovery);
  const inflammation = safeMetric(athlete.stats.inflammation);
  const jointRange = safeMetric(athlete.stats.jointRange);
  const loadTolerance = safeMetric(athlete.stats.loadTolerance);
  const perceivedRecovery = safeMetric(athlete.stats.perceivedRecovery);
  const sleep = safeMetric(athlete.stats.sleep);
  const soreness = safeMetric(athlete.stats.soreness);
  const sorenessLocation = athlete.stats.sorenessLocation || 'none';
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl glass-effect border border-white/10 shadow-2xl p-6 bg-[#20233A] min-w-[340px] max-w-5xl mx-auto relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="flex flex-col items-center md:items-start">
          <ProfileCard athlete={athlete} />
        </div>
        <InfoCard athlete={athlete} />
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="rounded-2xl bg-[#23263A] border border-white/10 shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-pink-400">[BETA] Recovery Report</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="font-semibold text-white text-sm mb-1">Overall Recovery</div>
                <div className="text-xs text-gray-400 mb-2">Aggregate of all metric scores</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-pink-400">{overallRecovery.mostRecent ?? '-'}%</span>
                  <span className="text-xs text-gray-400">Most Recent</span>
                </div>
                <div className="text-xs text-gray-400">Relative Recovery Loss: <span className="text-white font-semibold">{overallRecovery.relativeLoss ?? '-'}%</span></div>
              </div>
              {overallRecovery.radar ? <RadarChart data={overallRecovery.radar} /> : <RadarChart data={[0,0,0,0,0,0]} />}
            </div>
          </div>
          <button
            onClick={onShowStats}
            className="mt-4 bg-gradient-to-r from-blue-600 to-gray-700 text-white px-5 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-all z-20 w-full flex items-center justify-center gap-2"
          >
            <ChartLineUp size={22} weight="duotone" className="text-white" />
            Athlete Diagrams
          </button>
        </div>
      </div>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
        <MetricCard title="Inflammation" subtitle="Collected ~1x per week" mostRecent={inflammation.mostRecent} avg={inflammation.avg} avg14={inflammation.avg14} avg30={inflammation.avg30} warning={inflammation.warning} />
        <MetricCard title="Joint Range" subtitle="Collected ~1x per week" mostRecent={jointRange.mostRecent} avg={jointRange.avg} avg14={jointRange.avg14} avg30={jointRange.avg30} />
        <MetricCard title="Load Tolerance" subtitle="Collected ~1x per week" mostRecent={loadTolerance.mostRecent} avg={loadTolerance.avg} avg14={loadTolerance.avg14} avg30={loadTolerance.avg30} />
        <SorenessLocationCard location={sorenessLocation} />
        <MetricCard title="Perceived Recovery" subtitle="Collected most days" mostRecent={perceivedRecovery.mostRecent} avg={perceivedRecovery.avg} avg7={perceivedRecovery.avg7} avg30={perceivedRecovery.avg30} />
        <MetricCard title="Sleep" subtitle="Collected most days" mostRecent={sleep.mostRecent} avg={sleep.avg} avg7={sleep.avg7} avg30={sleep.avg30} warning={sleep.warning} />
        <MetricCard title="Soreness" subtitle="Collected most days" mostRecent={soreness.mostRecent} avg={soreness.avg} avg7={soreness.avg7} avg30={soreness.avg30} warning={soreness.warning} />
        <div />
      </div>
    </motion.div>
  );
};

// 1. Add mock test data for each athlete
const testTypes = ['Physical', 'Psychological'] as const;
const testNames = {
  Physical: ['Sprint 30m', 'Vertical Jump', 'Agility T-Test', 'Yo-Yo Endurance'],
  Psychological: ['Motivation Survey', 'Stress Questionnaire', 'Focus Test', 'Mood Assessment'],
};

// Generate mock test results for all athletes
const allTestResults = athletes.flatMap((athlete) => {
  // Each athlete gets 4 physical and 4 psychological tests
  return testTypes.flatMap((type) =>
    Array.from({ length: 4 }).map((_, i) => {
      const testName = testNames[type][i];
      const date = new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 60).toISOString().slice(0, 10);
      const result = type === 'Physical'
        ? `${(Math.random() * 100).toFixed(1)}${testName.includes('Jump') ? ' cm' : testName.includes('Sprint') ? ' s' : testName.includes('Agility') ? ' s' : testName.includes('Yo-Yo') ? ' m' : ''}`
        : `${(Math.random() * 10).toFixed(1)}/10`;
      return {
        athleteId: athlete.id,
        athleteName: athlete.name,
        athleteImage: athlete.image,
        sport: athlete.sport,
        testType: type,
        testName,
        date,
        result,
      };
    })
  );
});

const CoachDashboardDemo = () => {
  const [search, setSearch] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<'All' | 'Optimal' | 'Warning' | 'Risk'>('All');
  const [sportFilter, setSportFilter] = React.useState('All');
  // Tests section state
  const [testTypeFilter, setTestTypeFilter] = React.useState<'All' | 'Physical' | 'Psychological'>('All');
  const [testSportFilter, setTestSportFilter] = React.useState('All');
  const [selectedAthleteForStats, setSelectedAthleteForStats] = useState<null | typeof athletes[0]>(null);

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesName = athlete.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || athlete.status === statusFilter;
    const matchesSport = sportFilter === 'All' || athlete.sport === sportFilter;
    return matchesName && matchesStatus && matchesSport;
  });

  // Filtered test results: use main search and sport filter
  const filteredTests = allTestResults.filter((test) => {
    const matchesType = testTypeFilter === 'All' || test.testType === testTypeFilter;
    const matchesSport = testSportFilter === 'All' || test.sport === testSportFilter;
    return matchesType && matchesSport;
  });

  return (
    <div className="min-h-screen bg-[#181C2A] text-white pb-12">
      {/* Hero Banner */}
      <div className="relative w-full h-56 md:h-72 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="coach dashboard hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 drop-shadow-xl">Coach Dashboard</h1>
          <p className="text-lg md:text-2xl text-gray-200 font-medium drop-shadow-xl">All your coaching tools in one place!</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-[-3rem] z-20 relative px-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className={`glass-effect rounded-2xl shadow-2xl p-8 flex items-center space-x-6 border border-white/10 bg-gradient-to-br ${stat.color} bg-opacity-80 backdrop-blur-md`}
          >
            <div className="text-3xl drop-shadow-xl">{stat.icon}</div>
            <div>
              <div className="text-lg font-semibold text-gray-200 mb-1">{stat.label}</div>
              <div className="text-3xl font-bold tracking-tight gradient-text drop-shadow-xl">{stat.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- TESTS SECTION --- */}
      <div className="max-w-6xl mx-auto mt-20 px-4">
        <div className="mb-4">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-500 bg-clip-text text-transparent drop-shadow-lg mb-2 tracking-tight animate-fade-in">Athlete Test Results</h2>
          <div className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100/80 shadow text-lg font-semibold text-blue-900/90 mb-2 animate-fade-in">
            View all <span className="text-pink-600 font-bold">physical</span> and <span className="text-purple-600 font-bold">psychological</span> test results for your athletes in one place.
          </div>
        </div>
        <div className="mb-2 flex justify-end gap-2">
          <select
            value={testTypeFilter}
            onChange={e => setTestTypeFilter(e.target.value as 'All' | 'Physical' | 'Psychological')}
            className="rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1 text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
            style={{ minWidth: 120 }}
          >
            <option value="All">All Types</option>
            <option value="Physical">Physical</option>
            <option value="Psychological">Psychological</option>
          </select>
          <select
            value={testSportFilter}
            onChange={e => setTestSportFilter(e.target.value)}
            className="rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1 text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
            style={{ minWidth: 120 }}
          >
            <option value="All">All Sports</option>
            {allSports.map(sport => {
              const meta = getSportMeta(sport);
              return (
                <option value={sport} key={sport}>{meta.label}</option>
              );
            })}
          </select>
        </div>
        <div className="bg-white/90 glass-effect rounded-2xl shadow-2xl border border-blue-100/40 overflow-x-auto max-h-[520px] min-h-[320px]">
          <div className="sticky top-0 z-10 bg-white/95 rounded-t-2xl border-b border-blue-100/40">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 px-6 py-3 text-blue-700 font-bold text-sm uppercase tracking-wider">
              <div>Athlete</div>
              <div>Sport</div>
              <div>Type</div>
              <div>Test</div>
              <div>Date</div>
              <div>Result</div>
            </div>
          </div>
          <div className="divide-y divide-blue-100/40 max-h-[440px] overflow-y-auto custom-scrollbar">
            {filteredTests.length === 0 ? (
              <div className="text-center text-lg text-blue-300 py-12">No test results found.</div>
            ) : (
              filteredTests.map((test, idx) => (
                <div
                  key={test.athleteId + test.testName + test.date + idx}
                  className="grid grid-cols-2 md:grid-cols-6 gap-2 px-6 py-3 items-center hover:bg-blue-50/60 transition-all duration-150"
                  style={{ fontSize: '1rem' }}
                >
                  <div className="flex items-center gap-3">
                    <img src={test.athleteImage} alt={test.athleteName} className="w-8 h-8 rounded-full object-cover border-2 border-blue-200 shadow" />
                    <span className="font-semibold text-gray-900">{test.athleteName}</span>
                  </div>
                  <div>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${getSportMeta(test.sport).className}`}>{getSportMeta(test.sport).icon}{getSportMeta(test.sport).label}</span>
                  </div>
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${test.testType === 'Physical' ? 'bg-emerald-100 text-emerald-700' : 'bg-pink-100 text-pink-700'}`}>{test.testType}</span>
                  </div>
                  <div className="truncate text-black" title={test.testName}>{test.testName}</div>
                  <div className="text-xs text-blue-700 font-mono">{test.date}</div>
                  <div className="font-bold text-blue-900">{test.result}</div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="mb-16" />
      </div>
      {/* --- END TESTS SECTION --- */}

      {/* Athlete Statistics Section Title and Subtitle */}
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-500 bg-clip-text text-transparent drop-shadow-lg mb-2 tracking-tight animate-fade-in">Athlete Statistics</h2>
        <div className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-100 via-blue-100 to-purple-100/80 shadow text-lg font-semibold text-blue-900/90 mb-2 animate-fade-in">
          Explore detailed statistics and recovery reports for each athlete on your team.
        </div>
      </div>

      {/* Main search bar and filters */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white rounded-full shadow-xl border border-blue-100/40 p-2 md:p-3 backdrop-blur-md">
          <div className="flex-1 flex items-center gap-2 px-2">
            <MagnifyingGlass size={22} className="text-blue-400" />
            <input
              type="text"
              placeholder="Search athlete by name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-blue-900 placeholder:text-blue-400 px-2 py-1 text-lg font-medium"
            />
          </div>
          <div className="flex gap-2 flex-wrap px-2">
            <select
              value={sportFilter}
              onChange={e => setSportFilter(e.target.value)}
              className="rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1 text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
              style={{ minWidth: 120 }}
            >
              <option value="All">All Sports</option>
              {allSports.map(sport => {
                const meta = getSportMeta(sport);
                return (
                  <option value={sport} key={sport}>{meta.label}</option>
                );
              })}
            </select>
            {['All', 'Optimal', 'Warning', 'Risk'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status as 'All' | 'Optimal' | 'Warning' | 'Risk')}
                className={`px-5 py-1 rounded-full font-semibold border-2 transition-all duration-200 text-sm shadow-md flex items-center gap-2
                  ${statusFilter === status
                    ? status === 'All'
                      ? 'bg-blue-600 text-white border-blue-400 scale-105'
                      : statusMeta[status as keyof typeof statusMeta]?.className || ''
                    : 'bg-blue-50 text-blue-500 border-blue-100 hover:bg-blue-100/80'}
                `}
                style={{ minWidth: 80 }}
              >
                {status !== 'All' && statusMeta[status as keyof typeof statusMeta]?.icon}
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Athlete Cards Grid */}
      <div className="max-w-6xl mx-auto mt-4 px-4 grid grid-cols-1 gap-12">
        {filteredAthletes.length === 0 ? (
          <div className="text-center text-lg text-blue-200 py-12">No athletes found.</div>
        ) : (
          filteredAthletes.map((athlete, idx) => (
            <AthleteCard athlete={athlete} key={athlete.id} onShowStats={() => setSelectedAthleteForStats(athlete)} />
          ))
        )}
      </div>
      {/* Popup για στατιστικά αθλητή */}
      {selectedAthleteForStats && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-gray-100 rounded-2xl shadow-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in border-4 border-gray-300 flex flex-col items-center">
            <button
              onClick={() => setSelectedAthleteForStats(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl font-bold z-50 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-gray-300"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-xl font-bold text-center mb-4 text-gray-900">{selectedAthleteForStats.name} - Athlete Statistics</h3>
            <div className="w-full flex justify-center mb-2">
              <div className="flex flex-col md:flex-row items-center gap-2 bg-gradient-to-r from-blue-50 via-white to-rose-50 border border-blue-200/60 rounded-xl px-4 py-2 shadow text-sm text-gray-700 font-medium">
                <span className="flex items-center gap-1"><span className="inline-block w-4 h-4 rounded-full bg-rose-300 border border-rose-400 mr-1"></span> Red charts: <span className="font-semibold text-rose-600 ml-1">Physical tests</span></span>
                <span className="hidden md:inline-block mx-2 text-gray-400">|</span>
                <span className="flex items-center gap-1"><span className="inline-block w-4 h-4 rounded-full bg-blue-300 border border-blue-400 mr-1"></span> Blue charts: <span className="font-semibold text-blue-600 ml-1">Psychological charts</span></span>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full items-center">
              {/* Sprint Charts */}
              <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-rose-100 p-3 border border-rose-300 shadow flex flex-col items-center w-full max-w-xs mx-auto">
                <div className="font-bold text-sm mb-1 text-gray-800">Last Week</div>
                <div className="font-bold text-base mb-1 text-gray-900">Sprint</div>
                <SprintChart data={selectedAthleteForStats.sprintTimes.week} avg={selectedAthleteForStats.sprintTimes.week.reduce((a,b)=>a+b,0)/selectedAthleteForStats.sprintTimes.week.length} period="week" />
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-rose-100 p-3 border border-rose-300 shadow flex flex-col items-center w-full max-w-xs mx-auto">
                <div className="font-bold text-sm mb-1 text-gray-800">Last months</div>
                <div className="font-bold text-base mb-1 text-gray-900">Sprint</div>
                <SprintChart data={selectedAthleteForStats.sprintTimes.month} avg={selectedAthleteForStats.sprintTimes.month.reduce((a,b)=>a+b,0)/selectedAthleteForStats.sprintTimes.month.length} period="month" />
              </div>
              {/* Psychological Charts */}
              <PsychologicalChart label="Motivation" data={selectedAthleteForStats.psychological.motivation} />
              <PsychologicalChart label="Stress" data={selectedAthleteForStats.psychological.stress} />
              <PsychologicalChart label="Focus" data={selectedAthleteForStats.psychological.focus} />
              <PsychologicalChart label="Mood" data={selectedAthleteForStats.psychological.mood} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoachDashboardDemo; 